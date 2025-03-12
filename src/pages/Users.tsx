import { Link, useLoaderData } from "react-router-dom";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useEffect } from "react";

interface UserParams {
  id: number;
  name: string;
  username: string;
}

export const usersLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};

function Users() {
  const users = useLoaderData() as UserParams[];

  useEffect(() => {
    document.body.style.backgroundColor = "#121212"; // Gizemli koyu arkaplan
    document.body.style.color = "#ddd"; // Açık renk metin

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4 text-danger">L'équipe</h1>
      <p className="text-center mb-5 text-light">
     Meet them!
      </p>

      <Row>
        {users.map((user) => (
          <Col md={4} className="mb-4" key={user.id}>
            <Card className="h-100 shadow-lg bg-dark border-info">
              <Card.Body className="text-center">
                <div className="mb-3">
                  <img
                    src={`https://randomuser.me/api/portraits/men/${user.id + 10}.jpg`}
                    alt={user.name}
                    className="rounded-circle border border-danger shadow-sm"
                    width="100"
                    height="100"
                  />
                </div>
                <Card.Title className="text-danger">{user.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Dedektif #{user.id}
                </Card.Subtitle>
                <Card.Text className="text-light">CODE: {user.username}</Card.Text>
                <Link to={`/users/${user.id}`} className="btn btn-secondary">
                  Cases
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Users;
