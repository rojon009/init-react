import { LoginForm } from "../components/LoginForm";

export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-10">
      <h1 className="text-2xl font-bold">Login</h1>
      <LoginForm />
    </div>
  );
};
