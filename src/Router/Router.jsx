import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/component/Root/Root";
import Home from "../Pages/Home";
import Login from "../Login/Login";
import About from "../Pages/component/pages2/About";
import ServiceDetail from "../Pages/component/Detail/ServiceDetail";
import PrivateRout from "../PrivateRout";
import Profile from "../Pages/component/Profile/Profile";
import Book from "../Pages/component/Book/Book";

const Router = createBrowserRouter([
  {
    path: "/",
    element: < Home />,
    children: [
      { index: true, element: <Root /> }, // Home page
      { path: "about", element: <PrivateRout><About /></PrivateRout> },
      { 
        path: "about/main/:id", 
        element: <PrivateRout><ServiceDetail /></PrivateRout> 
      },
      { 
        path: "about/main/:id/book", 
        element: <PrivateRout><Book /></PrivateRout> 
      },
      { 
        path: "service/:id", 
        element: <PrivateRout><ServiceDetail /></PrivateRout> 
      },
      { 
        path: "service/:id/book", 
        element: <PrivateRout><Book /></PrivateRout> 
      },
      { 
        path: "profile", 
        element: <PrivateRout><Profile /></PrivateRout> 
      },{
          path: "login",
    element: <Login />,
  },
    ],
  },
  
]);

export default Router;
