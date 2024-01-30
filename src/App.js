import { Navigate, Route, Routes } from "react-router-dom";
import UserTemplate from "./templates/UserTemplate";
import Home from "./pages/Home";
import Detail from "./pages/Detail/Detail";
import Search from "./pages/Search";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<UserTemplate />}>
          <Route index element={<Home />} />
          <Route path=":id" element={<Detail />} />
          <Route path="cart" element={<Cart />} />
          {/* <Route path="id" element={<Detail />} /> */}
          <Route path="search" element={<Search />} />
          <Route path="profile" element={<Profile />} />

          <Route path="*" element={<Navigate to="" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />}></Route>
          {/* <Route path="*" element={<Navigate to="" />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
