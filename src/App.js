import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Homepage/Home";
import Login from "./Components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <div
              className="flex flex-row"
              style={{ backgroundColor: "#fff", minHeight: "100vh" }}
            >
              <Login />
            </div>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/"
          element={
            <div
              className="flex flex-row"
              style={{ backgroundColor: "#fff", minHeight: "100vh" }}
            >
              <Home/>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
