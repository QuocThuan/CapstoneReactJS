import { Route, Routes } from "react-router-dom";
import UserTemplate from "./Template/UserTemplate";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<Home />} />
          <Route path="id" element={<Detail />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
