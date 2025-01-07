import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800/30 shadow-[0_4px_6px_rgba(8,47,73,1)]">
      <div className="container mx-auto p-5">
        <div className="flex justify-between items-center">
          <div className="text-white uppercase font-bold text-lg">
            <NavLink to="/">
              <img className="w-16" src="/vite.svg" alt="logo" />
            </NavLink>
          </div>
          <ul className="flex gap-6 justify-center text-2xl">
            <li>
              <NavLink
                to="/"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}