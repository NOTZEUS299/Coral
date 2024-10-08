import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
