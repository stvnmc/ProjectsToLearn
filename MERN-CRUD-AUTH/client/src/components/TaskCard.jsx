import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";

const TaskCard = ({ task }) => {
  const { title, description, date, _id } = task;

  const { deleteTask } = useTasks();

  return (
    <div>
      <header>
        <h1>{title}</h1>
        <div>
          <button onClick={() => deleteTask(_id)}>delete</button>
          <button>
            <Link to={`/tasks/${_id}`}>edit</Link>
          </button>
        </div>
      </header>
      <p>{description}</p>
      <p>{new Date(date).toLocaleDateString()}</p>
    </div>
  );
};

export default TaskCard;
