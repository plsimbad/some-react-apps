import { Route, Routes } from "react-router-dom";
import { ToDo } from "./apps/todo/todo";
import Weather from "./apps/weather/weather";
import { Navbar } from "./navbar/navbar";

export function App() {
  return (
    <>
      <Navbar />
      <div className="scaffold">
        <Routes>
          <Route path="/" element={<ToDo />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </div>
    </>
  );
}
