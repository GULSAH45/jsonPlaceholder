import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';

interface TodosParam {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const TodosLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/todos`);
  
  if (!response.ok) {
    throw new Error("Todos not found");
  }
  
  const todos: TodosParam[] = await response.json();
  return todos;
};

function Todos() {
  const todos = useLoaderData() as TodosParam[];

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
