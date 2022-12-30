import React, { useState } from "react";
import { setDB } from "../../utilities/setDB";
import "./TodoList.css";

const TodoList = () => {
    const [input, setInput] = useState([]);
    const [todos, setTodos] = useState([]);

    const getInputValue = (e) => {
        setInput(e.target.value);
    };

    const addTodo = (e) => {
        setDB(input);
        getDBvalue();
    };

    const getDBvalue = () => {
        const dbValue = localStorage.getItem("todo-item");
        const todoItem = JSON.parse(dbValue);
        setTodos(todoItem);
    };
    return (
        <div className="background">
            <h3>TODO LIST</h3>
            <div>
                {/* todo list */}
                <ol>
                    {Object.keys(todos).map((todo, key) => (
                        <li key={key}>{todo}</li>
                    ))}
                </ol>
                <input
                    onChange={getInputValue}
                    className="inputField"
                    type="text"
                />
                <button onClick={addTodo} className="btn">
                    Add To Do +
                </button>
            </div>
        </div>
    );
};

export default TodoList;
