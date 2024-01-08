import { Route, Routes } from "react-router-dom";
import UserTemplate from "./template/userTemplate";
import Home from "./pages/Home/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
