import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";

import days from "dayjs";
import utc from "dayjs/plugin/utc";
days.extend(utc);

const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();

  return (
    <div>
      <header>
        <h1>{task.title}</h1>
        <div>
          <button onClick={() => deleteTask(task._id)}>delete</button>
          <button>
            <Link to={`/tasks/${task._id}`}>edit</Link>
          </button>
        </div>
      </header>
      <p>{task.description}</p>
      <p>{days(task.date).utc().format("DD/MM/YYYY")}</p>
    </div>
  );
};

export default TaskCard;
