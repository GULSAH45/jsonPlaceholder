import { useLoaderData, LoaderFunctionArgs, Link, useParams } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";

interface PostParams {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const PostLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}/posts`
  );
  if (!response.ok) {
    throw new Error("Posts not found");
  }
  const posts: PostParams[] = await response.json();
  return posts;
};

function Post() {
  const posts = useLoaderData() as PostParams[];
  const { userId } = useParams();

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
      <h1 className="text-center text-danger mb-4">📜</h1>
      <Row>
        {posts.map((post) => (
          <Col md={6} lg={4} className="mb-4" key={post.id}>
            <Card className="bg-dark text-white border-danger shadow-lg h-100">
              <Card.Body>
                <Card.Title className="text-danger">{post.title}</Card.Title>
                <Card.Text>{post.body.substring(0, 100)}...</Card.Text>
                <Link to={`/users/${userId}/posts/${post.id}`} className="btn btn-danger">
                  Reports
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Post;
