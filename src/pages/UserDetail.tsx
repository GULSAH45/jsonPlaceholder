
import { Link, LoaderFunctionArgs, Outlet, useLoaderData, useParams } from 'react-router-dom' 
interface UserDetailParams {
  id: number
  name: string
  username: string
  email: string
}

export const UserDetailLoader = async({params}:LoaderFunctionArgs) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
  const userDetail = response.json();
  return userDetail;
}
function UserDetail() {

  const userDetail = useLoaderData() as UserDetailParams;
  const{ userId } = useParams();
  return (
    <>
    
      <h1>Users Detail</h1>
      <p>{userDetail.username}</p>
      <p>{userDetail.email}</p>

  

      <Link to={`/users/${userId}/posts`}>Posts</Link>
      <Link to={`/users/${userId}/albums`}>Albums</Link>
      <Link to={`/users/${userId}/todos`}>Todos</Link>
    
      <Outlet />
    </>
  )
}

export default UserDetail