import { Link, useLocation } from "react-router";

export const Navbar = () => {
  const location = useLocation();
  return (
    <nav>
      <ul className="flex-col justify-between items-center p-4 bg-gray-800 text-white">
        <li>
          <Link
            to="/"
            className={
              location.pathname === "/" ? "text-bold text-yellow-300" : ""
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={
              location.pathname === "/about" ? "text-bold text-yellow-300" : ""
            }
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={
              location.pathname === "/projects"
                ? "text-bold text-yellow-300"
                : ""
            }
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};
