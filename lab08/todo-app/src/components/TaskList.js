import React from 'react';
import Task from './Task';
import './styles.css';

const TaskList = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
  const completedTasks = tasks.filter(task => task.completed);
  const incompleteTasks = tasks.filter(task => !task.completed);

  return (
    <div className="task-list">
      {incompleteTasks.map((task) => (
        <Task 
          key={task.id} 
          task={task} 
          onEdit={onEdit} 
          onDelete={onDelete} 
          onToggleComplete={onToggleComplete} 
        />
      ))}
      {completedTasks.map((task) => (
        <Task 
          key={task.id} 
          task={task} 
          onEdit={onEdit} 
          onDelete={onDelete} 
          onToggleComplete={onToggleComplete} 
        />
      ))}
    </div>
  );
};

export default TaskList;