type TaskInputProps = {
  task: string;
  deadline: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
};

export const TaskInput = ({ task, deadline, onChange, onAdd }: TaskInputProps) => (
  <div className="header">
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
