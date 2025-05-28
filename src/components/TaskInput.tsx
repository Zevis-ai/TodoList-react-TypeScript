import type { TaskInputProps } from "../interfaces";

export const TaskInput = ({ task, deadline, onChange, onAdd, taskArrIsEmpty, removeAll, doneAll, markAllAsNotDone, allAsDone }: TaskInputProps) => (
  <div className="header">
    {!taskArrIsEmpty && (
      <>
        <button className="remove-all-btn" onClick={removeAll}>
          Remove All Tasks
        </button>

        {allAsDone ? (
          <button className="unmark-all-btn" onClick={markAllAsNotDone}>
            Unmark All Tasks
          </button>
        ) : (
          <button className="done-all-btn" onClick={doneAll}>
            Done All Tasks
          </button>
        )}
      </>
    )}

    <div className="input-container">
      <input
        type="text"
        placeholder="Task..."
        name="task"
        value={task}
        onChange={onChange}
      />
      <input
        type="number"
        placeholder="Deadline (in Days)..."
        name="deadline"
        value={deadline}
        onChange={onChange}
      />
    </div>
    <button onClick={onAdd}>Add Task</button>
  </div>
);
