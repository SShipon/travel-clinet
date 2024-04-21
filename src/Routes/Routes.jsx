import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);