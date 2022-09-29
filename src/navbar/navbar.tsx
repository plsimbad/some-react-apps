import { CustomLink } from "./custom-link";

export function Navbar() {
  return (
    <nav>
      <ul className="flex space-x-5 p-5">
        <CustomLink to="/todo">ToDo</CustomLink>
        <CustomLink to="/weather">Weather</CustomLink>
        <CustomLink to="/spotify">Spotify</CustomLink>
      </ul>
    </nav>
  );
}
