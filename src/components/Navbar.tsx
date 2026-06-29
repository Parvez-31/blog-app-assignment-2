import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-600">
          Blogify
        </Link>

        <div className="flex gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : "text-gray-600 hover:text-green-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/articles"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : "text-gray-600 hover:text-green-600"
            }
          >
            Articles
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
