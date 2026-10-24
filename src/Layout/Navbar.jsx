
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { title: "Home", to: "home" },
    { title: "Skills", to: "skill" },
    { title: "Projects", to: "project" },
    { title: "Services", to: "service" },
    { title: "Contact", to: "contact" },
  ];

  const handleNavigation = (section) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => {
        const target = document.getElementById(section);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 250);
    }
  };

  const NavItem = ({ item }) => {
    if (location.pathname !== "/") {
      return (
        <button
          type="button"
          onClick={() => handleNavigation(item.to)}
          className="navbar"
        >
          {item.title}
        </button>
      );
    }

    return (
      <ScrollLink
        to={item.to}
        spy
        smooth
        offset={-85}
        duration={150}
        activeClass="active"
        className="navbar"
        onClick={() => setOpen(false)}
      >
        {item.title}
      </ScrollLink>
    );
  };

  return (
    <nav className="fixed left-0 top-0 z-[9999] w-full border-b border-white/[0.07] bg-[#0b1120]/85 shadow-lg shadow-black/10 backdrop-blur-2xl">
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-5 sm:px-8 md:w-[92%] md:px-0">
        <RouterLink
          to="/"
          onClick={() => setOpen(false)}
          aria-label="Salman Farshi homepage"
          className="group flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 font-Jakarta text-sm font-extrabold text-white shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-105">
            SF
          </span>

          <span className="font-Jakarta text-lg font-bold tracking-tight text-white sm:text-xl">
            Salman<span className="text-blue-400">.</span>
          </span>
        </RouterLink>

        <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavItem item={item} />
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          {location.pathname === "/" ? (
            <ScrollLink
              to="contact"
              smooth
              duration={550}
              offset={-85}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-blue-400/30 bg-blue-500/10 px-4 py-2.5 text-sm font-semibold text-blue-300 transition-all hover:border-blue-400/60 hover:bg-blue-500/20"
            >
              Let's Talk
              <FiArrowUpRight size={16} />
            </ScrollLink>
          ) : (
            <RouterLink
              to="/"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-400/30 bg-blue-500/10 px-4 py-2.5 text-sm font-semibold text-blue-300 transition-all hover:bg-blue-500/20"
            >
              Back Home
              <FiArrowUpRight size={16} />
            </RouterLink>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-slate-200 transition hover:border-blue-400/40 hover:text-blue-400 md:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/[0.06] bg-[#0b1120]/95 transition-all duration-300 md:hidden ${
          open ? "max-h-[390px] opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <ul className="mx-auto flex max-w-[1320px] flex-col gap-1 px-5 py-4 sm:px-8">
          {navItems.map((item) => (
            <li key={item.to} className="py-1">
              <NavItem item={item} />
            </li>
          ))}

          <li className="pt-3">
            {location.pathname === "/" ? (
              <ScrollLink
                to="contact"
                smooth
                duration={550}
                offset={-85}
                onClick={() => setOpen(false)}
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-3 font-semibold text-white transition hover:bg-blue-400"
              >
                Let's Talk
                <FiArrowUpRight />
              </ScrollLink>
            ) : (
              <RouterLink
                to="/"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-blue-500 px-4 py-3 text-center font-semibold text-white"
              >
                Back Home
              </RouterLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
