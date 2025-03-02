import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";

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

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Post;
