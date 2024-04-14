import React, { useState, useRef } from 'react';
import './index.scss';

function ToDoList() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const enterRef = useRef(null);

  const handleAddTask = () => {
    if (newTask === '') {
      alert('Task must be not null');
      return;
    }

    setTasks((prev) => [
      ...prev,
      {
        status: false,
        content: newTask,
      },
    ]);
    setNewTask('');
  };

  const handleInputTask = (event) => {
    setNewTask(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      enterRef.current.click();
    }
  };

  const handleSetDoneTask = (taskIndex) => {
    const listTasks = tasks;

    listTasks[taskIndex].status = !listTasks[taskIndex].status;

    setTasks([...listTasks]);
  };

  const handleSetRemoveTask = (taskIndex) => {
    if (!tasks.at(taskIndex).status) {
      alert('Do not delete unfinished tasks');
      return;
    }

    const listTasks = tasks.filter((it, index) => index !== taskIndex);

    setTasks([...listTasks]);
  };

  return (
    <div className="todo-list">
      <div className="todo-list__header">
        <h1>To do list</h1>
      </div>

      <div className="todo-list__new-task">
        <input
          placeholder="Input new task"
          type="text"
          value={newTask}
          onChange={handleInputTask}
          onKeyDown={handleKeyDown}
        ></input>

        <button
          className="todo-list__button todo-list__button--add-task"
          onClick={handleAddTask}
          ref={enterRef}
        >
          Add task
        </button>
      </div>

      <hr className="todo-list__break-line" />

      <div className="todo-list__list-task">
        {tasks.map((task, index) => (
          <div className="todo-list__list-task__task" key={index}>
            <div className="todo-list__list-task__task__status">
              <input
                type="checkbox"
                checked={task.status}
                readOnly={true}
              ></input>
            </div>
            <div className="todo-list__list-task__task__content">
              <p>{task.content}</p>
            </div>
            <div className="todo-list__list-task__task__action">
              <button
                className="todo-list__button todo-list__button--edit"
                onClick={() => handleSetDoneTask(index)}
              >
                Done
              </button>
              <button
                className="todo-list__button todo-list__button--remove"
                onClick={() => handleSetRemoveTask(index)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
