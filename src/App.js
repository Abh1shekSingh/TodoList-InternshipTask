import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";

import Divider from '@material-ui/core/Divider';
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";
function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState([]);
  const [string, setString] = useState(""); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
    .then((res)=>res.json())
    .then((data => {
      setTodos(data);
    }))
  },[]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  useEffect(()=> {
    const filterData = todos.filter(item => item.completed === true);
    setFilter(filterData);
  },[todos])

  useEffect(()=> {
    if(!todos.length){
      setString("Look like you're absolutly free today!")
    }else{
      setString("");
    }
  },[todos])

  

  return (
    <div className="App">
      <Typography className="heading" style={{ padding: 16 }} variant="h4">
        THINGS TO DO:
      </Typography>
      <hr className="hr"></hr>
      <Divider />
      <p className="emptyText">{string}</p>
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
      <hr className="hr"></hr>
       <h2>DONE: {filter.length}</h2>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}
export default App;

