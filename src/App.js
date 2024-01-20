import { Navigate, Route, Routes } from "react-router-dom";
import UserTemplate from "./templates/UserTemplate";
import Home from "./pages/Home";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<UserTemplate />}>
          <Route index element={<Home />} />
          <Route path="id" element={<Detail />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />}></Route>
          <Route path="*" element={<Navigate to="" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
