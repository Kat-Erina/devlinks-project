import { NavLink } from "react-router-dom";
import LoginHeader from "./LoginHeader";
const Header = () => {
  return (
    <header>
      <LoginHeader />
      <div className="links-container-header">
        <NavLink
          to="/links"
          // activeClassName="active-link"
          // activeStyle={{ fontWeight: "bold", color: "red" }}
        >
          Links
        </NavLink>
        <NavLink
          to="/details"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Profile Details
        </NavLink>
      </div>
      <br />
      <NavLink className="preview-link" to="/preview">
        preview
      </NavLink>
    </header>
  );
};

export default Header;
