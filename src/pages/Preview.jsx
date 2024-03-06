import { NavLink } from "react-router-dom";

const Preview = () => {
  return (
    <>
      <header>
        <NavLink to="/details">Back to Editor</NavLink>
        <button> Share Link</button>
      </header>
      <div>Preview</div>
    </>
  );
};

export default Preview;
