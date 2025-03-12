import { Link, LoaderFunctionArgs, Outlet, useLoaderData, useParams } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

interface UserDetailParams {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const UserDetailLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const userDetail = await response.json();
  return userDetail;
};

function UserDetail() {
  const userDetail = useLoaderData() as UserDetailParams;
  const { userId } = useParams();

  useEffect(() => {
    document.body.style.backgroundColor = "#121212"; // Koyu arkaplan
    document.body.style.color = "#ddd"; // Açık renk metin
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="bg-dark text-white border-danger shadow-lg">
            <Card.Body className="text-center">
              <div className="mb-3">
                <img
                  src={`https://randomuser.me/api/portraits/men/${userDetail.id + 10}.jpg`}
                  alt={userDetail.name}
                  className="rounded-circle border border-danger shadow-sm"
                  width="120"
                  height="120"
                />
              </div>
              <Card.Title className="text-danger">{userDetail.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Code: {userDetail.username}</Card.Subtitle>
              <Card.Text className="text-light">
                📧 {userDetail.email}
              </Card.Text>
              <div className="d-flex justify-content-center gap-3">
                <Link to={`/users/${userId}/posts`} className="btn btn-danger">📜 Posts</Link>
                <Link to={`/users/${userId}/albums`} className="btn btn-danger">📷 Albums</Link>
                <Link to={`/users/${userId}/todos`} className="btn btn-danger">✅ Todos</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Outlet />
    </Container>
  );
}

export default UserDetail;
