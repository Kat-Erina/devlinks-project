import { Link, Route, Routes } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>This is Login Page</h1>
      <form>
        <Link to="/links">Login</Link>
      </form>
      <p>
        Do not have an account? <Link to="/registration">create account</Link>
      </p>
    </div>
  );
};

export default Login;
