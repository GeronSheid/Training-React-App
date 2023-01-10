import React from "react";
import PropTypes from "prop-types";
import Context from "../context";

function TodoItem({ todo, index, onChange }) {

  const { removeTodo } = React.useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push('done');
  }

  return (
    <li className="TodoItem">
      <input type="checkbox" checked={todo.completed} onChange={() => onChange(todo.id)} />
      <span className={classes.join(' ')}> 
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.content}
      </span>
      <button className="btn" onClick={ removeTodo.bind(null, todo.id)}>Удалить</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
