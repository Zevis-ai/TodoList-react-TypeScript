import "./App.css";
import { useState } from "react";
import type { ITask } from "./interfaces";
import { TodoTask } from "./components/TodoTask";
import { EmptyMessage } from "./components/EmptyMessage";
import { TaskInput } from "./components/TaskInput"

const App = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    if (!task || deadline <= 0) {
      alert("Please enter a valid task and deadline.");
      return;
    }
    const newTask = { taskName: task, deadline: deadline, isDone: false };
    setTodoList([...todoList, newTask]);
    console.log(todoList);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  const editTask = (taskNameToEdit: string, newTaskName: string): void => {
    setTodoList(
      todoList.map((task) => {
        if (task.taskName === taskNameToEdit) {
          return { ...task, taskName: newTaskName };
        }
        return task;
      })
    );
  };

  const toggleDone = (taskName: string) => {
    setTodoList((prev) =>
      prev.map((task) =>
        task.taskName === taskName ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  const removeAll = () => {
    if (window.confirm("Are you sure you want to remove all tasks?")) {
      setTodoList([]);
    }
  };

  let taskArrIsEmpty = todoList.length === 0;
  let content;


  if (todoList.length === 0) {
    content = <EmptyMessage/>;
  } else {
    content = todoList.map((task: ITask, key: number) => (
      <TodoTask
        key={key}
        task={task}
        completeTask={completeTask}
        editTask={editTask}
        toggleDone={toggleDone}
      />
    ));
  }

  return (
    <div className="App">
        <h1>Zevi's To Do List</h1>
      <TaskInput
        task={task}
        deadline={deadline}
        onChange={handleChange}
        onAdd={addTask}
        taskArrIsEmpty={taskArrIsEmpty}
        removeAll={removeAll}
      />
      <div className="todoList">{content}</div>
    </div>
  );
};

export default App;