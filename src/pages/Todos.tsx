import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import {ListGroup, Container } from "react-bootstrap";

interface TodosParam {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const TodosLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}/todos`
  );
  if (!response.ok) {
    throw new Error("Todos not found");
  }
  const todos: TodosParam[] = await response.json();
  return todos;
};

function Todos() {
  const todos = useLoaderData() as TodosParam[];

  return (
    <Container className="py-5 bg-dark">
      <h1 className="text-center text-danger mb-4">📝 Todo List</h1>
      <p className="text-center text-white mb-5">
        Mysterious Actions Check List
      </p>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item
            key={todo.id}
            className={`bg-dark text-white border-danger mb-2 shadow ${
              todo.completed ? "text-success" : "text-warning"
            }`}
          >
            <div className="d-flex justify-content-between">
              <p className="mb-0">{todo.title}</p>
              <span>
                {todo.completed ? "✅ Tamamlandı" : "🔲 Beklemede"}
              </span>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default Todos;
