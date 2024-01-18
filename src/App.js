import { Navigate, Route, Routes } from "react-router-dom";
import UserTemplate from "./Template/UserTemplate";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<UserTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path="*" element={<Navigate to="" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
