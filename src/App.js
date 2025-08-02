import React, { useState } from 'react';
import './App.css';

function App() {
  HEAD
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');

      const [tasks, setTasks] = useState([]);
      const [input, setInput] = useState("");

      const addTask = () => {
        if (input.trim()) {
          setTasks([...tasks, input]);
          setInput("");
          a615061(Updated CSS styling for To - Do app)
    }
      };

      const deleteTask = (index) => {
        HEAD
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
      };

      return (
        <div className="app">
          <h1>To-Do List</h1>
          <div className="input-section">
            <input
              type="text"
              placeholder="Enter a task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
          </div>
          <ul className="task-list">
            {tasks.map((t, i) => (
              <li key={i}>
                {t} <button onClick={() => deleteTask(i)}>Delete</button>

                const newTasks = [...tasks];
                newTasks.splice(index, 1);
                setTasks(newTasks);
  };

                return (
                <div className="App">
                  <h1>My To-Do App</h1>
                  <input
                    type="text"
                    value={input}
                    placeholder="Enter a task"
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <button onClick={addTask}>Add Task</button>
                  <ul>
                    {tasks.map((task, index) => (
                      <li key={index}>
                        {task}
                        <button onClick={() => deleteTask(index)}>❌</button>
                        a615061 (Updated CSS styling for To-Do app)
                      </li>
                    ))}
                  </ul>
                </div>
                );
}

                export default App;
