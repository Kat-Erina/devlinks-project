import { Link } from "react-router-dom";
import LoginHeader from "../components/LoginHeader";

const Registration = () => {
  return (
    <main className="main-registration">
      <section className="registration-main-container">
        <LoginHeader />
        <form className="registration-form">
          <h2>Create Account</h2>
          <p style={{ color: "var(--Grey, #737373)", marginBottom: "2.5rem" }}>
            Lets get you started sharing your links
          </p>
          <label htmlFor="email">Email address</label>

          <div className="input-wrapper-div">
            <i className="fa-regular fa-envelope"></i>
            <input
              className="email"
              type="email"
              name="email"
              placeholder="e.g test@gmail.com"
            ></input>
          </div>
          <br />
          <label htmlFor="password">Password</label>

          <div className="input-wrapper-div">
            <i className="fa-solid fa-lock"></i>
            <input className="password" type="password" name="password"></input>
          </div>

          <br />

          <label htmlFor="password">Confirm Password</label>

          <div className="input-wrapper-div">
            <i className="fa-solid fa-lock"></i>
            <input className="password" type="password" name="password"></input>
          </div>
          <br />
          <p className="password-instructions">
            Password must contain at least 8 characters
          </p>
          <button className="registration-btn">Create New Account</button>
          <p>
            Already have an account?{" "}
            <Link className="login" to="/">
              Login
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Registration;
