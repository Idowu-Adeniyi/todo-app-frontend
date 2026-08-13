import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Main from "./components/Main";
import "./App.css";

function App() {
  // let todosList = [
  //   {
  //     id: crypto.randomUUID(),
  //     task: "Buy milk",
  //   },
  // ];

  let todosList = [];

  const [todos, setTodos] = useState(todosList);
  //  Keep input text inside its own React state
  // CHANGED: Initialized as a pure, empty text string
  const [taskInput, setTaskInput] = useState("");

  function handleChange(e) {
    //const { value } = e.target; // Destructure the value
    // setTaskInput(value);
    // CHANGED: Since state is just a string, we grab e.target.value directly.
    setTaskInput(e.target.value); // reading from Input element directly
  }

  function handleForm(e) {
    e.preventDefault();
    // Reading directly from the string state
    if (!taskInput.trim()) return; // clear & trim whitespace and stop program if value is empty

    //const { name, value } = e.target;  this works for onChange function because it targets the imput element directly, so you can access name and value attrubutes
    const [{ name, value }] = e.target; //this works on form , because form is iterable like array, so it goes in an grab first element in the form array, which is the input element and then have access to name and value
    let newTodo = {
      id: crypto.randomUUID(), // or Date.now()
      // CHANGED: We explicitly use the name attribut dynamically, but assign it the string directly from our state variable
      [name]: taskInput,
      // task: e.target.task.value,
    };

    setTodos((prevTodo) => {
      return [...prevTodo, newTodo]; // we use [] here because we stated our state data with array
    });
    //CHANGED: Wipes out the text box by setting the string back to completely empty
    setTaskInput("");
    console.log(newTodo);
  }

  function deleteTask(targetId) {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => {
        return todo.id !== targetId;
      });
    });
  }

  return (
    <>
      <section>
        <div className="container">
          <Main
            todos={todos}
            handleForm={handleForm}
            handleChange={handleChange}
            taskInput={taskInput}
            deleteTask={deleteTask}
          />
        </div>
      </section>
    </>
  );
}

export default App;
