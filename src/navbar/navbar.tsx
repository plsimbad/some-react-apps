import { CustomLink } from "./custom-link";

export function Navbar() {
  return (
    <nav>
      <ul className="flex p-5 space-x-5">
        <CustomLink to="/todo">ToDo</CustomLink>
        <CustomLink to="/weather">Weather</CustomLink>
      </ul>
    </nav>
  );
}
