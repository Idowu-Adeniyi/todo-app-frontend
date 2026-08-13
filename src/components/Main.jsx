import React from "react";

function Main(props) {
  return (
    <div className="content-container">
      <h1>Todo - List</h1>
      {/* CHANGED: props.taskInput is now a plain string, so we output it directly */}
      <p>{props.taskInput}</p>
      <div className="input-btn">
        <form onSubmit={props.handleForm}>
          <input
            type="text"
            name="task"
            placeholder="Add a new task..."
            onChange={props.handleChange}
            // CHANGED: Mapped direcly to the plain prop. so it is controlled.
            value={props.taskInput}
          />
          {/* CHANGED: checks the plain string directly to disable the button */}
          <button
            type="submit"
            disabled={!props.taskInput.trim()}
            className={!props.taskInput.trim() ? "btn-disabled" : "btn-active"}
          >
            Add
          </button>
        </form>
      </div>
      <div className="list-content">
        <ul>
          {props.todos.map((todo) => {
            return (
              <li key={todo.id} id={todo.id}>
                {todo.task}
                <button onClick={() => props.deleteTask(todo.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Main;
