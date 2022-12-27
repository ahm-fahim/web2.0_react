import "./App.css";
import Coktail from "./components/Coktail/Coktail";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="body">
            <Header></Header>
            <Coktail></Coktail>
        </div>
    );
}

export default App;
