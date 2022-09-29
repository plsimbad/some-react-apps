import { NavLink } from "react-router-dom";

export function CustomLink({ to, children, ...props }) {
  return (
    <li>
      <NavLink
        to={to}
        {...props}
        className={({ isActive }) => (isActive  ? "text-teal-100" : "")}
      >
        {children}
      </NavLink>
    </li>
  );
}
