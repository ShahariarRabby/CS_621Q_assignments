import React, { useState } from 'react';
import './styles.css';

const Task = ({ task, onEdit, onDelete, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(task.id, newText);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  const handleToggleComplete = (e) => {
    if (!e.target.closest('.task-button') && !e.target.closest('.task-input')) {
      onToggleComplete(task.id);
    }
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`} onClick={handleToggleComplete}>
      {isEditing ? (
        <div className="task-editing">
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="task-input"
            onClick={(e) => e.stopPropagation()}
            onKeyPress={handleKeyPress}
          />
          <button onClick={(e) => { e.stopPropagation(); handleSave(); }} className="task-button save-button">Save</button>
        </div>
      ) : (
        <div className="task-viewing">
          <span className="task-text">
            • {task.text}
          </span>
          <div>
            <button onClick={(e) => { e.stopPropagation(); handleEdit(); }} className="task-button edit-button">Edit</button>
            <button onClick={(e) => { e.stopPropagation(); onDelete(task.id); }} className="task-button delete-button">Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;