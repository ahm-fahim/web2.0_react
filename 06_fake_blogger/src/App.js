import "./App.css";
import MainLayout from "./layout/MainLayout";
import cover from "./images/cover.png"

function App() {
    return (
        <MainLayout>
            <div className="App">
                <h1 className="title">Welcome to Fake Blogger!</h1>
                <img className="App-logo" src={cover} alt="" />
            </div>
        </MainLayout>
    );
}

export default App;
