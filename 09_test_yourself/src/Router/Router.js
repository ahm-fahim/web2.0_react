import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import About from "../pages/About";
import QuizArea from "../components/QuizArea/QuizArea";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayouts />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "quiz",
                    loader: () =>
                        fetch("https://openapi.programming-hero.com/api/quiz"),
                    element: <Quiz />,
                },
                {
                    path: "quiz/:id",
                    element:<QuizArea/>
                },
                {
                    path: "about",
                    element: <About />,
                },
            ],
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default Router;
