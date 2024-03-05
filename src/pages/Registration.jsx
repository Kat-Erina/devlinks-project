import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <h2>This is Registration Page</h2>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default Registration;
