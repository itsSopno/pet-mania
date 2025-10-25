import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Root from "../Pages/component/Root/Root";
import About from "../Pages/component/pages2/About";
import ServiceDetail from "../Pages/component/Detail/ServiceDetail";
import PrivateRout from "../PrivateRout";
import Profile from "../Pages/component/Profile/Profile";
import Book from "../Pages/component/Book/Book";

const Router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/home",
    element: <PrivateRout><Home /></PrivateRout>,
    children: [
      { index: true, element: <Root /> },
      { path: "About", element: <About /> },
      { path: "About/main/:id", element: <ServiceDetail /> },
      { path: "About/main/:id/Book", element: <Book /> },
      { path: "service/:id", element: <ServiceDetail /> },
      { path: "service/:id/Book", element: <Book /> },
      { path: "Profile", element: <Profile /> },
    ],
  },
]);

export default Router;
