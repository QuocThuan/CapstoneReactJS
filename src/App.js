import { Route, Routes } from "react-router-dom";
import UserTemplate from "./templates/UserTemplate";
import Home from "./pages/Home";
import Detail from "./pages/Detail/Detail";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<Home />} />
          <Route path=":id" element={<Detail />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
