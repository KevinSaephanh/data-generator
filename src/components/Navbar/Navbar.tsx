import { FC, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navs = [
    {
      to: "/",
      text: "Home",
    },
    {
      to: "/guide",
      text: "Guide",
    },
    {
      to: "/mocks",
      text: "Mocks",
    },
  ];

  return (
    <nav className="bg-gray-800 relative px-2 py-3 w-screen">
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
          {/* Logo */}
          <Link to={"/"}>
            <img src={logo} alt="#" className="h-14" />
          </Link>

          {/* Hamburger button */}
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-white rounded-lg md:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Nav items */}
        <div
          className={"md:flex flex-grow items-center" + (isOpen ? " flex" : " hidden")}
          id="example-navbar-danger"
        >
          <div className={"md:flex flex-grow items-center " + (isOpen ? "flex" : "hidden")}>
            <ul className="flex flex-col md:flex-row list-none md:ml-auto">
              {navs.map((nav, key) => (
                <li className="nav-item md:pr-10">
                  <Link
                    to={nav.to}
                    key={key}
                    className="nav-item block px-3 py-2 text-white md:text-lg rounded md:bg-transparent md:p-0 hover:opacity-75"
                    aria-current="page"
                  >
                    {nav.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
