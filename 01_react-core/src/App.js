import logo from "./logo.svg";
import "./App.css";

const styleComponent = {
    title: {
        color: "tomato",
        fontSize: "50px",
    },
    sub_title: {
        color: "gold",
        fontSize: "35px",
    },
    title_text: {
        color: "gray",
        letterSpacing: "3px",
    },
    body: {
        display: "flex",
        flexDirection: "row",
    },
    sub_body: {
        width: "23%",
        backgroundColor: "whitesmoke",
        padding: "10px",
        margin: "10px auto",
        borderRadius: "10px",
        boxShadow: "2px 2px 5px gray",
    },
};

function App() {
    return (
        <div className="App">
            <Heading></Heading>
            <DataLoad></DataLoad>
        </div>
    );
}

function Heading() {
    return (
        <div>
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
        <div>
            <h2 style={styleComponent.sub_title}>
                How to load Data from array?
            </h2>
            <Cart name={language}></Cart>
        </div>
    );
}

function Cart(props) {
    const languageArray = props.name;
    console.log(languageArray[0].lang);
    return (
        <div>
            <div style={styleComponent.body}>
                {languageArray.map((details, key) => (
                    <div key={key} style={styleComponent.sub_body}>
                        <h3 style={styleComponent.title}>{details.lang}</h3>
                        <p style={styleComponent.title_text}>{details.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default App;
