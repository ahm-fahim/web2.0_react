import { useRouteError } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <MainLayout>
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </MainLayout>
    );
}
