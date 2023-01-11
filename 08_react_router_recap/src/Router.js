import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Orders from "./pages/Orders";

function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    path: "/",
                    loader: () => fetch("products.json"),
                    element: <Home />,
                },
                {
                    path: "orders",
                    element: <Orders />,
                },
            ],
        },
    ]);
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default Router;
