import { useState } from "react";
import "./App.css";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, settodo] = useState([]);
  // const todos = [
  //   {
  //     title: "hello",
  //     description: "hey",
  //     completed: false,
  //   },mongodb+srv://amarbadiger:C2jrykPzYiQE6Gh0@cluster0.fh5tewx.mongodb.net/Todo-App
  // ];
  fetch("http://localhost:3000/todos")
    .then((res) => res.json())
    .then((data) => settodo(data));
  // const todos = [
  //   {
  //     title: "Gym",
  //     description: "Go To Gym",
  //     completed: false == true ? "Completed" : "Not completed",
  //   },
  //   {
  //     title: "Gym",
  //     description: "Go To Gym",
  //     completed: false == true ? "Completed" : "Not completed",
  //   },
  //   {
  //     title: "Gym",
  //     description: "Go To Gym",
  //     completed: false == true ? "Completed" : "Not completed",
  //   },
  //   {
  //     title: "Gym",
  //     description: "Go To Gym",
  //     completed: false == true ? "Completed" : "Not completed",
  //   },
  //   {
  //     title: "Gym",
  //     description: "Go To Gym",
  //     completed: false == true ? "Completed" : "Not completed",
  //   },
  //   {
  //     title: "Gym",
  //     description: "Go To Gym",
  //     completed: false == true ? "Completed" : "Not completed",
  //   },
  //   {
  //     title: "Gym",
  //     description: "Go To Gym",
  //     completed: false == true ? "Completed" : "Not completed",
  //   },
  // ];
  return (
    <div className="main">
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
