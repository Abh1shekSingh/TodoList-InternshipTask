import { ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
      <div className="listContainer">
        <ListItem style={{ display: "flex" }}>
        <input className="checkbox" type="checkbox" checked={todo.completed} onClick={handleCheckboxClick} />
        <Typography
            checked={todo.completed}
            onClick={handleCheckboxClick}
            className="todoitem"
            variant="body1"
            style={{
            textDecoration: todo.completed ? "line-through" : null
            }}
        >
            {todo.title}
        </Typography>
        
        </ListItem>
        <button className="deletebtn" onClick={handleRemoveClick}>
            <CloseIcon />
        </button>
    </div>
  );
}

export default Todo;