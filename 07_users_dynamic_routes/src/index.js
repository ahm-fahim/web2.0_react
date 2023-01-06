import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Posts from "./pages/Posts";
import Errorpages from "./pages/Errorpages";
import PostDetails from "./pages/PostDetails";
import PostContainer from "./components/PostContainer/PostContainer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Errorpages />,
    },
    {
        path: "/postContainer",
        element: <PostContainer />,
    },
    {
        path: "/postContainer/posts/:id",
        element: <PostContainer />,
    },
    {
        path: "/posts",
        element: <Posts />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
