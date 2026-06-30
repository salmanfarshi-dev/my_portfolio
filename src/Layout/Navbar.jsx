import { useState } from "react";
import { Link } from "react-scroll";
import { IoMenuSharp } from "react-icons/io5";

import { IoClose } from "react-icons/io5";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { title: "Home", to: "home" },
    { title: "Skill", to: "skill" },
    { title: "Project", to: "project" },
    { title: "Service", to: "service" },
    { title: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-bg-card shadow-md shadow-primary/20 z-9999">
      <div className="max-w-330 mx-auto px-4 md:px-0 h-20 flex justify-between items-center relative">
        <h1 className=" text-2xl md:text-3xl font-semibold font-Jakarta text-primary">
          Salman Farshi
        </h1>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="active"
                className="navbar"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-primary"
        >
          {open ? <IoClose /> : <IoMenuSharp />}
        </button>

        <div
          className={`absolute top-full left-0 w-full bg-bg-card shadow-xl overflow-hidden transition-all duration-500 md:hidden ${
            open ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                  activeClass="active"
                  onClick={() => setOpen(false)}
                  className="navbar"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
