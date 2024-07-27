import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './components/styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const editTask = (id, newText) => {
    setTasks(tasks.map((task) => (
      task.id === id ? { ...task, text: newText, completed: false } : task
    )));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleteTask = (id) => {
    setTasks(tasks.map((task) => (
      task.id === id ? { ...task, completed: !task.completed } : task
    )));
  };

  return (
    <div className="app">
      <h1 className="app-title">To-Do List</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} onToggleComplete={toggleCompleteTask} />
    </div>
  );
};

export default App;