import { createBrowserRouter, RouteObject } from "react-router-dom";
import Root from "./root";
import HomePage from "./pages/HomePage";
import Users, { usersLoader } from "./pages/Users";
import Favs from "./pages/Favs";
import UserDetail, { UserDetailLoader } from "./pages/UserDetail";
import Post, { PostLoader } from "./pages/Post";
import PostAndComment, { PostCommentLoader } from "./pages/PostAndComment";
import Album, { AlbumLoader } from "./pages/Album";
import Todos, { TodosLoader } from "./pages/Todos";
import AlbumDetail, { albumDetailLoader } from "./pages/AlbumDetail";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "home",
        element: <HomePage />,
      },
      {
        path: "users",
        element: <Users />,
        loader: usersLoader,
      },


      {
        path: "/users/:userId",
        element: <UserDetail />,
        loader: UserDetailLoader,
        children:[
          {
            path: "posts",
            element: <Post/>,
            loader: PostLoader
    
          },
          {
            path: "posts/:postId",
            element: <PostAndComment/>,
            loader: PostCommentLoader
          },
        { path: "albums",
            element: <Album />,
            loader: AlbumLoader,
          
        },
          {
            path:"todos",
            element:<Todos/>,
            loader:TodosLoader
          }

        ]
      },
      {
        path: "favs",
        element: <Favs />,
     
      },
      {path: "/users/:userId/albums/:albumId",
     element: <AlbumDetail />,
     loader: albumDetailLoader,}
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
