import { Link, useLocation } from "react-router";

export const Navbar = () => {
  const location = useLocation();
  return (
    <nav>
      <ul className="flex flex-row space-x-8 justify-center items-center p-4 bg-green-800 text-white">
        <li>
          <Link
            to="/"
            className={
              location.pathname === "/" ? "font-bold text-yellow-300" : ""
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={
              location.pathname === "/about" ? "font-bold text-yellow-300" : ""
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
                ? "font-bold text-yellow-300"
                : ""
            }
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={
              location.pathname === "/contact"
                ? "font-bold text-yellow-300"
                : ""
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
