import React from "react";
import "./styles/reset.css";
import "./styles/App.css";
import TodoList from "./components/TodoList";
import Context from "./context";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, content: "Купить молока" },
    { id: 2, completed: true, content: "Купить печенье" },
    { id: 3, completed: false, content: "Купить РПГ 7" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="App">
        <h1 className="AppTitle">Список дел:</h1>
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>Упс... Кажется вы всё сделали!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
