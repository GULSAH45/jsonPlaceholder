import { useLoaderData, LoaderFunctionArgs, Link, useParams} from "react-router-dom";

interface PostParams {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const PostLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}/posts`);
  if (!response.ok) {
    throw new Error("Posts not found");
  }
  const posts: PostParams[] = await response.json();
  return posts;
};

function Post() {
  const posts = useLoaderData() as PostParams[];
  const{ userId } = useParams();
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/users/${userId}/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Post;
