import React, { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "./api";

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTitle, setNewTitle] = useState("");

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const res = await getTasks();
        setTasks(res.data);
    };

    const handleAdd = async () => {
        if (!newTitle.trim()) return;
        await createTask(newTitle);
        setNewTitle("");
        fetchTasks();
    };

    const handleToggle = async (task) => {
        await updateTask(task._id, !task.completed);
        fetchTasks();
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        fetchTasks();
    };

    return (
        <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
            <h1>📝 To-Do List</h1>
            <input
                type="text"
                value={newTitle}
                placeholder="New task"
                onChange={(e) => setNewTitle(e.target.value)}
                style={{ padding: 5, fontSize: 16 }}
            />
            <button onClick={handleAdd} style={{ marginLeft: 10, padding: "5px 10px" }}>
                Add
            </button>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {tasks.map((task) => (
                    <li key={task._id} style={{ marginTop: 10 }}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggle(task)}
                        />
                        <span
                            style={{
                                marginLeft: 10,
                                textDecoration: task.completed ? "line-through" : "none",
                            }}
                        >
                            {task.title}
                        </span>
                        <button
                            onClick={() => handleDelete(task._id)}
                            style={{ marginLeft: 10, color: "red" }}
                        >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
