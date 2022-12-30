const setDB = (id) => {
    let todoList;

    const dbItem = localStorage.getItem("todo-item");
    if (dbItem) {
        todoList = JSON.parse(dbItem);
    } else {
        todoList = {};
    }

    const totalItems = todoList[id];

    if (totalItems) {
        const newItem = totalItems + 1;
        todoList[id] = newItem;
    } else {
        todoList[id] = 1;
    }
    localStorage.setItem("todo-item", JSON.stringify(todoList));
};

const removeItem = (key) => {  
    const dbItem = localStorage.getItem("todo-item");
    console.log(dbItem);
    console.log(key);
};

export { setDB, removeItem };
