import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import { createBrowserRouter , RouterProvider} from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import PostDetails from "./Pages/PostDetails";
import Register from "./Pages/Register";
import UserProfile from "./Pages/UserProfile";
import Authors from "./Components/Authors";
import CreatePosts from "./Pages/CreatePosts";
import CategoryPosts from "./Pages/CategoryPosts"
import EditPosts from "./Pages/EditPosts";
import AuthorPosts from "./Pages/AuthorPosts";
import LogOut from "./Pages/LogOut";
import Layout from "./Components/Layout";
import Login from './Pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/> ,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts/:id", element: <PostDetails /> },
      { path: "register", element: <Register /> },
      { path: "/login", element: <Login/> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "authors", element: <Authors /> },
      { path: "create", element: <CreatePosts /> },
      { path: "posts/categories/:category", element: <CategoryPosts/> },
      { path: "posts/edit/:id", element: <EditPosts/> },
      { path: "myPosts/:id", element: <AuthorPosts/> },
      { path: "logout", element: <LogOut/> }
    ],
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
