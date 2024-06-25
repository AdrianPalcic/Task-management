import { useEffect } from "react";
import { useState } from "react";

function Form({ onAddTask }) {
  const [newTask, setNewTasks] = useState({
    title: "",
    date: "",
    desc: "",
  });

  function handleTitleChange(event) {
    setNewTasks((prevTasks) => ({ ...prevTasks, title: event.target.value }));
  }

  function handleDateChange(event) {
    setNewTasks((prevTasks) => ({ ...prevTasks, date: event.target.value }));
  }

  function handleDescChange(event) {
    setNewTasks((prevTasks) => ({ ...prevTasks, desc: event.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Adding task:", newTask); // Log the new task
    onAddTask(newTask); // Call add new task function from form and pass the new task
    setNewTasks({
      title: "",
      date: "",
      desc: "",
    });
  }

  return (
    <>
      <form className="task-form" onSubmit={handleSubmit}>
        <label> Task Title</label>
        <input
          type="text"
          value={newTask.title}
          onChange={handleTitleChange}
        />

        <label>Due Date:</label>
        <input type="date" value={newTask.date} onChange={handleDateChange} />

        <label> Description:</label>
        <textarea
          placeholder="walk the dog..."
          value={newTask.desc}
          onChange={handleDescChange}
        ></textarea>

        <button type="submit">Add Task</button>
      </form>
    </>
  );
}

export default Form;
