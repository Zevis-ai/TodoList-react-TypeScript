export interface ITask {
  taskName: string;
  deadline: number;
  isDone: boolean;
}

export interface TaskInputProps {
  task: string;
  deadline: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
  taskArrIsEmpty: boolean;
  removeAll: () => void;
};

export interface TodoTaskProps {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
  editTask(taskNameToEdit: string, newTaskName: string): void;
  toggleDone(taskName: string): void;
}