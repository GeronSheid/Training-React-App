import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <ul className="TodoList">
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired
};

export default TodoList;
