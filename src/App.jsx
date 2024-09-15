import { text } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";




function App() {

  const [tasks, setTask] = useState([])
  const [nevTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  const newTask = (e) => {
    setNewTask(e.target.value);
  }
  

const addTask = () => {
  if (nevTask === "") {
    alert("You must write something");
  } else {
    setTask([...tasks, nevTask]);
    setNewTask("");
  }
}

const toggleChecked = (e) => {
    console.log(e.target.tagName)
    console.log(e.target)
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
}

const startEditing = (index) => {
  setEditingTask(index);
  setEditedTask(tasks[index]);
  console.log(tasks[index]);
}

const editTask = (index) => {
  if (editedTask === "") {
      return
  }
   const updatedTasks = [...tasks];
   updatedTasks[index] = editedTask;
   setTask(updatedTasks);
   cancelEditing();
  
}
const cancelEditing = () => {
  setEditingTask(null);
  setEditedTask("");
}
const deleteTask = (index) => {

  const updatedTasks = tasks.filter((item, i) => i !== index);
  setTask(updatedTasks);
}

  return (
    <>
 <div className="app-background">
      <div className="app-container">
        <h1 className="app-title">To-Do List</h1>

        <div className="addTask">
          <input type="text" 
          placeholder="Add Task" 
          value={nevTask}
          onChange={newTask}
          />
          <button className="add-btn" onClick={addTask}>+</button>
        </div>
        <ul className="list-container" onClick={toggleChecked}>
         {tasks.map((item, index) => {
          return ( <li key={index}>
            {item}
            {editingTask === index && (
                    <div className="editTaskContainer">
                      <input type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} />
                      <button onClick={() => editTask(index)}>+</button>
                    </div>
                    )}
            <div className="actions">
            <button onClick={() => startEditing(index)}>
            <i class="fa-solid fa-pen-to-square"></i>
            </button>
          <span onClick={() => deleteTask(index)}>X</span>
          </div>
          </li> )
         })}
        </ul>
      </div>
    </div>
    
    </>
  )
}

export default App
