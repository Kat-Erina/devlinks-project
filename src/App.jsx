import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Links from "./pages/Links";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </>
  );
}

export default App;
