import React, { useState } from 'react';
import './styles.css';

const TaskForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="task-input"
        placeholder="Add a new task..."
      />
      <button type="submit" className="task-button add-button">Add Task</button>
    </form>
  );
};

export default TaskForm;