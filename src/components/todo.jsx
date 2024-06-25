import { useState, useEffect } from "react";
import Form from "./Form";
import EditForm from "./EditForm";

function Todo() {
  const [isShowing, setIsShowing] = useState(false);
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("TASKS");
    if ( savedTasks === null ) return []

    return JSON.parse(savedTasks);
  }); // Store all tasks
  const [edit, setEdit] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null); // New state to store the index of the task being edited


  useEffect(()=> {
    localStorage.setItem("TASKS", JSON.stringify(tasks))
  }, [tasks])

  const handleClick = () => {
    setIsShowing(!isShowing);
  };

  const handleAddTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks); // Update task state
    setIsShowing(false);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setEdit(true);
    setEditingIndex(index);
  };

  const handleEditTask = (task) => {
    const updatedTasks = [
      ...tasks.slice(0, editingIndex),
      task,
      ...tasks.slice(editingIndex + 1),
    ];
    setTasks(updatedTasks);
    setEdit(false);
    setEditingIndex(null);
  };

  return (
    <>
      {isShowing ? (
        <Form onAddTask={handleAddTask} />
      ) : (
        <div className="form-btn-container">
          <button className="open-form-btn" onClick={handleClick}>
            Add a new task
          </button>
          <ul>
            {
            tasks.map((task, index) => (
              <li className="list" key={index}>
                <h3>{task.title}</h3>
                <p>Due Date: {task.date}</p>
                <p>Description: {task.desc}</p>
                <button className="delete-btn" onClick={() => deleteTask(index)}>
                  Delete
                </button>
                <button className="edit-btn" onClick={() => editTask(index)}>
                  Edit
                </button>
                {editingIndex === index && (
                  <EditForm
                    task={task}
                    onEditTask={(task) => handleEditTask(task)}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Todo;
