import { SubmitHandler, useForm } from "react-hook-form";
import { login } from "../../api/authentication";
import localStorageService from "../../services/localStorageService";
import { useNavigate } from "react-router";
import { resolve } from "path";

type LoginInputs = {
  username: string;
  password: string;
  email: string;
};

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginInputs>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    try {
      const response = await login(data);
      if (!response) {
        throw new Error("Login failed");
      }
      const token = response?.token;
      if (token) {
        localStorageService.setLocalStorage("token", token);
        navigate("/");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="w-[20rem] m-auto mt-20 border border-gray border-1 p-5 rounded">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row"></div>
        <div className="flex flex-col">
          <label>Username</label>
          <input
            {...register("username", { required: true })}
            className="bg-gray my-2"
          />
          {errors?.username && <span>This field is required</span>}
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input
            {...register("password", { required: true })}
            className="bg-gray my-2"
          />
          {errors?.password && <span>This field is required</span>}
        </div>
        <div className="flex flex-col">
          <label>Email</label>
          <input
            {...register("email", { required: true })}
            className="bg-gray my-2"
          />
          {errors?.email && <span>This field is required</span>}
        </div>
        <div className="my-2 text-center">
          <button type="submit" className="w-20 bg-gray ">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
