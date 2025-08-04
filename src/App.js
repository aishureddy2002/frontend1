import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const backendURL = 'https://your-backend.onrender.com/tasks'; // Replace with your actual URL

  // Load tasks from backend on page load
  useEffect(() => {
    axios.get(backendURL)
      .then(res => setTasks(res.data))
      .catch(err => console.error("❌ Error fetching tasks:", err));
  }, []);

  // Add task to backend
  const addTask = () => {
    if (!input.trim()) return;

    axios.post(backendURL, { text: input })
      .then(res => setTasks([...tasks, res.data]))
      .catch(err => console.error("❌ Error adding task:", err));

    setInput('');
  };

  // Delete task from backend
  const deleteTask = (id) => {
    axios.delete(`${backendURL}/${id}`)
      .then(() => setTasks(tasks.filter(task => task._id !== id)))
      .catch(err => console.error("❌ Error deleting task:", err));
  };

  return (
    <div className="App">
      <h1>My To-Do App (MongoDB Connected)</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task._id}>
            {task.text}
            <button onClick={() => deleteTask(task._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
