import { useState } from "react";
import type { TodoTaskProps } from "../interfaces";

export const TodoTask = ({
  task,
  completeTask,
  editTask,
  toggleDone,
}: TodoTaskProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.taskName);

  const handleSave = () => {
    editTask(task.taskName, newName);
    setIsEditing(false);
  };

  return (
    <div className="task">
      <button
        className="editButton"
        onClick={isEditing ? handleSave : () => setIsEditing(true)}
      >
        {isEditing ? "💾" : "✏️"}
      </button>

      <div className="content">
        {isEditing ? (
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="task-input"
          />
        ) : (
          <span
            className={task.isDone ? "task-done" : ""}
          >
            {task.taskName}
          </span>
        )}
        <span className={task.isDone ? "task-done" : ""}>{task.deadline} Days</span>
      </div>

      <button className="doneButton" onClick={() => toggleDone(task.taskName)}>
        {task.isDone? "🥳🤪🤩🤩🥳🤪" : "✔️" }
      </button>
      <button
        className="deleteButton"
        onClick={() => completeTask(task.taskName)}
      >
        ✖️
      </button>
    </div>
  );
};
