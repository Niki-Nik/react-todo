import React from "react";
import TodoList from "./todo/TotoList";
import Context from "./context";
import AddTodo from "./todo/AddTodo";

const App = function () {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: false, title: "Купить хлеб"},
        {id: 2, completed: false, title: "Купить колу"},
        {id: 3, completed: false, title: "Купить молоко"},
    ]);
    const toggleTodo = function (id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }))
    };
    const removeTodo = function (id) {
      setTodos(todos.filter(todo => todo.id !== id))
    };
    const addTodo = function (title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false,
        }]));
    };
    return (
        <Context.Provider value={{removeTodo}}>
            <div className={"wrapper"}>
                <h1>React To Do List</h1>
                <AddTodo onCreate={addTodo} />
                { todos.length ? <TodoList todos={todos}
                                           onToggle={toggleTodo}
                /> : <p>No todos!</p> }
            </div>
        </Context.Provider>
    );
};

export default App;
