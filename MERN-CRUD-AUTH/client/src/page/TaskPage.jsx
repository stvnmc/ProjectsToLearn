import React, { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";

const TaskPage = () => {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  });
  if (tasks.length === 0) return <h1>No Tasks</h1>;

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))}
    </div>
  );
};

export default TaskPage;
