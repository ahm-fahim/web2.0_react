import { Link } from "react-router-dom";
import "./App.css";
import Cover from "./components/Cover/Cover";
import MainLayout from "./layout/MainLayout";

function App() {
    return (
        <MainLayout>
            <div className="container App">
                <Cover></Cover>
                <Link to="/shop" className="btn btn-danger">Let Start Shopping</Link>
            </div>
        </MainLayout>
    );
}

export default App;
