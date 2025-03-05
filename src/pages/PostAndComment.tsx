import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { LoaderFunctionArgs, useLoaderData,} from 'react-router-dom';

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

export const PostCommentLoader = async ({params}: LoaderFunctionArgs) => {
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const posts = await postResponse.json();

    const commentResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`);
    const comments = await commentResponse.json();

    return {posts, comments};
}


function PostAndComment() {
const postComments = useLoaderData() as {posts: PostParams, comments: CommentParams[]};
// const {postId} = useParams();


  return (

<>
<Container>
<Row>{postComments.comments.map((comment) => (
  <div key={comment.id}>
    <p>{comment.name}</p>

  </div>
))}
<Col>
<h1>Comments</h1>
<h2>{postComments.posts.title}</h2>
<p>{postComments.posts.body}</p>
</Col>

</Row>
</Container>
</>
  )
}

export default PostAndComment