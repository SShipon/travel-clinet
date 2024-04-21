import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Page from "../Pages/Page/Page";
import Contact from "../Pages/Contact/Contact";
import Destination from "../Pages/Destination/Destination";
import News from "../Pages/Page/News/News";
import Tours from "../Pages/Tours/Tours";
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'destination',
        element: <Destination />,
      },
      {
        path: 'tours',
        element: <Tours />,
      },
      {
        path: 'page',
        element: <Page />,
      },
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
     
    ]
  },
 
]);
