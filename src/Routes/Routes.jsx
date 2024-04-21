import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Page from "../Pages/Page/Page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'page',
        element:<Page/>
      }
    ]
  },
  ]);