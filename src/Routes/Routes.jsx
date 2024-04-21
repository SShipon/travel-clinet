import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Destination from "../Pages/Destination/Destination";

export const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Main />,

  },
  {
    path:'/',
    element:<Home />
  }

  ]);