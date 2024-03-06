import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Links from "./pages/Links";
import ProfileDetails from "./pages/ProfileDetails";
import Preview from "./pages/Preview";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/links" element={<Links />} />
        <Route path="/details" element={<ProfileDetails />}></Route>
        <Route path="/preview" element={<Preview />}></Route>
      </Routes>
    </>
  );
}

export default App;
