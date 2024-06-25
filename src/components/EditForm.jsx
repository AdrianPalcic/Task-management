import { useState } from "react";

    function EditForm({task, onEditTask}) {

        const [title, setTitle] = useState(task.title)
        const [date, setDate] = useState(task.date)
        const [desc, setDesc] = useState(task.desc);

        const handleSubmit = (e) => {
            e.preventDefault();
            onEditTask({title, date, desc,});
        }

        return (
            <form onSubmit = {handleSubmit} className="edit-task-form">
                <label>Task Title:</label>
                <input 
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
                 <label>Task Date:</label>
                <input 
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                />
                 <label>Task Description:</label>
                <input
                type="textarea" 
                value={desc}
                onChange={e => setDesc(e.target.value)}
                />
                <button type="submit">Save Changes</button>
            </form>
        );
    }

    export default EditForm;