import { Link, useLoaderData } from "react-router-dom";

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
  return (
    <>
      <h1>Users</h1>
      <ul className="nameslist">
        {users.map((user) => (
          <Link to={`/users/${user.id}`} key={user.id}>{user.name}</Link>
        ))}
      </ul>
    </>
  );
}

export default Users;
