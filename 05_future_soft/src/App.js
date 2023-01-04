import "./App.css";
import About from "./components/About/About";
import Galance from "./components/Galance/Galance";
import Header from "./components/Headers/Header/Header";
import Services from "./components/OurServices/Services/Services";

function App() {
    return (
        <div>
            <Header></Header>
            <Galance></Galance>
            <About></About>
            <Services></Services>
        </div>
    );
}

export default App;
