import { Link } from "react-router-dom";
import LoginHeader from "../components/LoginHeader";

const Login = () => {
  return (
    <main className="main-login">
      <section className="login-main-container">
        <LoginHeader />
        <form className="login-form">
          <h2>Login</h2>
          <p style={{ color: "var(--Grey, #737373)", marginBottom: "2.5rem" }}>
            Add your details below to get back into the app
          </p>
          <label htmlFor="email">Email address</label>
          <br />
<div className="input-wrapper-div">
            <i className="fa-regular fa-envelope"></i>
            <input
              type="email"
              name="email"
              className="email"
              placeholder="e.g text@gmail.com"
            ></input>
          </div>
          <br />

          <label htmlFor="password">Password</label>
          <br />
          <div className="input-wrapper-div">
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              name="password"
              className="password"
              placeholder="enter your password"
            ></input>
          </div>
          <br />
          <Link className="login-btn" to="/links">
            Login
          </Link>
          <p className="register-p">
            Do not have an account?{" "}
            <Link className="registration" to="/registration">
              Create account
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Login;
