import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const { signup, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="Username"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
