
import React, { useState } from "react";
import * as uuid from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    title: "",
    completed: false
  });

  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, title: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (todo.title.trim()) {
      addTodo({ ...todo, id: uuid.v4() });
      setTodo({ ...todo, title: "" });
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input 
        className="inputTextFeild"
        label="Task"
        type="text"
        name=""
        value={todo.title}
        placeholder="Enter new Task"
        onChange={handleTaskInputChange}
      />
      <button className="addbtn" onClick={handleSubmit}  type="submit">ADD TASK</button>
    </form>
  );
}

export default TodoForm;