import React, { useEffect } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

interface PostParams {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface CommentParams {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const PostCommentLoader = async ({ params }: LoaderFunctionArgs) => {
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const posts = await postResponse.json();

  const commentResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`
  );
  const comments = await commentResponse.json();

  return { posts, comments };
};

function PostAndComment() {
  const postComments = useLoaderData() as { posts: PostParams; comments: CommentParams[] };

  useEffect(() => {
    document.body.style.backgroundColor = "#121212"; // Koyu tema
    document.body.style.color = "#ddd"; // Açık renk metin
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <Container className="py-5">
      <Row>
        {/* Post Kartı */}
        <Col lg={8} className="mx-auto mb-4">
          <Card className="bg-dark text-white border-danger shadow-lg">
            <Card.Body>
              <Card.Title className="text-danger">{postComments.posts.title}</Card.Title>
              <Card.Text>{postComments.posts.body}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className="text-center text-danger mb-4">💬 Records</h2>
      <Row>
        {postComments.comments.map((comment) => (
          <Col md={6} lg={4} key={comment.id} className="mb-4">
            <Card className="bg-dark text-white border-secondary shadow-sm">
              <Card.Body>
                <Card.Title className="text-warning">{comment.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{comment.email}</Card.Subtitle>
                <Card.Text>{comment.body}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PostAndComment;
