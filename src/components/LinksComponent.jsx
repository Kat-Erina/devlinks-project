import { Link, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Preview from "../pages/ProfileDetails";

const LinksComponent = () => {
  return (
    <>
      <Header />
      <main className="main-container-links">
        <div className="mobile-profile"></div>
        <div className="customized-div"></div>
      </main>

      {/* <Link to="/preview">bla</Link> */}
    </>
  );
};

export default LinksComponent;
