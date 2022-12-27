import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const styleComponent = {
    title: {
        color: "tomato",
        fontSize: "50px",
    },
    sub_title: {
        color: "black",
        fontSize: "35px",
    },
    title_text: {
        color: "gray",
        letterSpacing: "3px",
    },
    sub_body: {
        backgroundColor: "whitesmoke",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "2px 2px 5px gray",
        width: "100%",
        minHeight: "150px",
        margin: "10px 0px",
    },
    button: {
        backgroundColor: "tomato",
        color: "white",
        border: "none",
        borderRadius: "50px",
        fontSize: "25px",
        padding: "10px 20px",
        margin: "10px",
    },
    code: {
        backgroundColor: "gray",
        padding: "10px 15px",
        borderRadius: "10px",
        color: "white",
        letterSpacing: "2px",
        width: "350px",
        margin: "10px auto",
        overflowY: "scroll",
        boxShadow: "2px 2px 5px gray",
    },
};

function App() {
    return (
        <div className="App container">
            <Heading></Heading>
            <DataLoad></DataLoad>
            <DynamicCounter></DynamicCounter>
            <RandomUser></RandomUser>
        </div>
    );
}

function Heading() {
    return (
        <div className="container-fluid">
            <h1 style={styleComponent.title}>React Core Concept</h1>
            <h4 style={styleComponent.title_text}>
                Here we can write html,js in the same statement. We can apply
                mathmetical calculation , conditional statement in the same
                line.
            </h4>
            <h3>In react Its call JSX(Javascript XML)</h3>
            <img className="App-logo" src={logo} alt="" />
        </div>
    );
}

function DataLoad() {
    const language = [
        {
            lang: "HTML",
            title: "Hyper Text Markup Language",
        },
        {
            lang: "CSS",
            title: "Cascading style sheet",
        },
        {
            lang: "Javascript",
            title: "Scripting Language",
        },
        {
            lang: "Python",
            title: "Object oriented language",
        },
    ];
    return (
        <div className="container-fluid">
            <h2 style={styleComponent.sub_title}>
                How to load Data from array?
            </h2>
            <p style={styleComponent.code}>
                Array.map(value => console.log(value));
            </p>
            <Cart name={language}></Cart>
        </div>
    );
}

function Cart(props) {
    const languageArray = props.name;
    // console.log(languageArray[0].lang);
    return (
        <div className="container-fluid mt-5 mb-5">
            <div style={styleComponent.body} className="row">
                {languageArray.map((details, key) => (
                    <div
                        key={key}
                        className="col-md-6 col-lg-3 col-sm-12 d-flex justify-content-center align-items-center"
                    >
                        <div style={styleComponent.sub_body}>
                            <h3 style={styleComponent.title}>{details.lang}</h3>
                            <p style={styleComponent.title_text}>
                                {details.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function DynamicCounter() {
    return (
        <div className="container-fluid">
            <h1 style={styleComponent.sub_title}>Dynamic Counter Function</h1>
            <p style={styleComponent.code}>
                const [count, setCount] = useState(0) <br />
                setCount(count + 1) <br /> setCount(count - 1)
            </p>
            <div>
                <Counter></Counter>
                <Counter></Counter>
                <Counter></Counter>
            </div>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div style={styleComponent.sub_body}>
                <h1>{count}</h1>
                <button
                    style={styleComponent.button}
                    onClick={() => setCount(count + 1)}
                >
                    Increase +
                </button>
                <button
                    style={styleComponent.button}
                    onClick={() => setCount(count - 1)}
                >
                    Decrease -
                </button>
            </div>
        </div>
    );
}

function RandomUser() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch("https://randomuser.me/api/")
            .then((res) => res.json())
            .then((data) => setUser(data.results[0]));
    }, []);
    return (
        <div>
            <h1>Random User</h1>
            <div style={styleComponent.code}>
                <p>fetch data from api using</p>
                <h4>useEffect</h4>
            </div>
            <div style={styleComponent.sub_body}>
                <img
                    src={user.picture.large}
                    alt=""
                    style={{ borderRadius: "100px" }}
                />
                <h2 style={styleComponent.title}>
                    {user.name.title} {user.name.first} {user.name.last}
                </h2>
                <h4>Gender: {user.gender}</h4>
            </div>
        </div>
    );
}

export default App;
