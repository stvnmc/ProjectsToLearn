import { useForm } from "react-hook-form";

const TaskFormPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          autoFocus
        />
        <textarea rows="3" placeholder="Description" ></textarea>
        <button>Save</button>
      </form>
    </div>
  );
};

export default TaskFormPage;
