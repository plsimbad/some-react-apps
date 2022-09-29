import { Route, Routes } from "react-router-dom";
import { Spotify } from "./apps/spotify/spotify";
import { ToDo } from "./apps/todo/todo";
import { Weather } from "./apps/weather/weather";
import { Welcome } from "./apps/welcome/welcome";
import { Navbar } from "./navbar/navbar";

export function App() {
  return (
    <>
      <Navbar />
      <div className="scaffold">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/spotify" element={<Spotify />} />
        </Routes>
      </div>
    </>
  );
}
