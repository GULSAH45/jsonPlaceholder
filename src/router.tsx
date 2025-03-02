import { createBrowserRouter, RouteObject } from "react-router-dom";
import Root from "./root";
import HomePage from "./pages/HomePage";
import Users, { usersLoader } from "./pages/Users";
import Favs from "./pages/Favs";
import UserDetail, { UserDetailLoader } from "./pages/UserDetail";
import Post, { PostLoader } from "./pages/Post";
import Album, { AlbumLoader } from "./pages/Album";
import Todos from "./pages/Todos";

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
        { path: " albums",
            element: <Album />,
            loader: AlbumLoader
        },
          {
            path:"todos",
            element:<Todos/>
          }

        ]
      },
      {
        path: "favs",
        element: <Favs />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
