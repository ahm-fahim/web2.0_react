import React, { useState } from "react";
import "./TodoList.css";

const TodoList = (key, value) => {
    const [input, setInput] = useState([]);
    const [todo, setTodo] = useState([]);

    const getValue = (e) => {
        setInput(e.target.value);
    };

    const addTodo = () => {
        setTodo(input);
        const newTodo = todo;
        localStorage.setItem("todo-item", JSON.stringify(newTodo));
    };

    return (
        <div className="background">
            <h3>TODO LIST</h3>
            <div>
                {/* todo list */}
                <ol>
                    <li>{localStorage.getItem("todo-item")}</li>
                </ol>
                <input onChange={getValue} className="inputField" type="text" />
                <button onClick={addTodo} className="btn">
                    Add To Do +
                </button>
            </div>
        </div>
    );
};

export default TodoList;
