import React, { useState } from "react";
import { removeItem, setDB } from "../../utilities/setDB";
import "./TodoList.css";

const TodoList = () => {
    const [input, setInput] = useState([]);
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        setDB(input);
        getDBvalue();
        e.preventDefault();
        setInput(' ');
    };

    const getDBvalue = () => {
        const dbValue = localStorage.getItem("todo-item");
        const todoItem = JSON.parse(dbValue);
        setTodos(todoItem);
    };
    const deleteItem = (key) => {
        removeItem(key);
    };
    return (
        <div className="background">
            <h3>TODO LIST</h3>
            <div className="body">
                {/* todo list */}
                <ol>
                    {Object.keys(todos).map((todo, key) => (
                        <li key={key}>
                            {todo}
                            <button
                                className="btn"
                                onClick={() => deleteItem(key)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ol>
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        className="inputField"
                        type="text"
                    />
                    <button type="submit" className="btn">
                        Add To Do +
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TodoList;
