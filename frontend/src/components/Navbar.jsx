import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../public/logo.png";
import { TbMessageCircle } from "react-icons/tb";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl bg-white shadow-md border border-gray-100">
        
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <span className="font-manrope text-[18px] font-bold tracking-tight">
            <span className="text-[#1E2A5A]">Shubh </span>
            <span className="text-[#E34A2F]">Suramya</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-[12px] font-semibold tracking-widest ${
                  isActive
                    ? "text-[#FF5A3C]"
                    : "text-[#2d2d2d] hover:text-[#FF5A3C]"
                }`
              }
            >
              HOME
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-[12px] font-semibold tracking-widest ${
                  isActive
                    ? "text-[#FF5A3C]"
                    : "text-[#2d2d2d] hover:text-[#FF5A3C]"
                }`
              }
            >
              ABOUT US
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-[12px] font-semibold tracking-widest ${
                  isActive
                    ? "text-[#FF5A3C]"
                    : "text-[#2d2d2d] hover:text-[#FF5A3C]"
                }`
              }
            >
              PROJECTS
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-[12px] font-semibold tracking-widest ${
                  isActive
                    ? "text-[#FF5A3C]"
                    : "text-[#2d2d2d] hover:text-[#FF5A3C]"
                }`
              }
            >
              CONTACT US
            </NavLink>
          </li>
        </ul>

        <button className="hidden sm:inline-flex items-center gap-2 bg-[#F1F1F1] hover:bg-[#E7E7E7] rounded-full px-5 py-2 text-[14px] font-semibold text-[#1E2A5A] transition-all">
          <TbMessageCircle className="text-[18px]" />
          <span>Inquire Now</span>
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center transition"
        >
          <div className="relative w-5 h-5">
            <span className={`absolute left-0 w-5 h-0.5 bg-[#1E2A5A] rounded transition-all duration-300 ${menuOpen ? "rotate-45 top-2" : "top-0"}`} />
            <span className={`absolute left-0 w-5 h-0.5 bg-[#1E2A5A] rounded transition-all duration-300 ${menuOpen ? "opacity-0" : "top-2"}`} />
            <span className={`absolute left-0 w-5 h-0.5 bg-[#1E2A5A] rounded transition-all duration-300 ${menuOpen ? "-rotate-45 top-2" : "top-4"}`} />
          </div>
        </button>
      </nav>

      <div className={`md:hidden max-w-7xl mx-auto mt-3 overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white rounded-2xl px-6 py-5 flex flex-col gap-5 shadow-lg border border-gray-100">
          
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `text-[14px] font-semibold tracking-widest ${
                isActive ? "text-[#FF5A3C]" : "text-[#2d2d2d]"
              }`
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `text-[14px] font-semibold tracking-widest ${
                isActive ? "text-[#FF5A3C]" : "text-[#2d2d2d]"
              }`
            }
          >
            ABOUT US
          </NavLink>

          <NavLink
            to="/projects"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `text-[14px] font-semibold tracking-widest ${
                isActive ? "text-[#FF5A3C]" : "text-[#2d2d2d]"
              }`
            }
          >
            PROJECTS
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `text-[14px] font-semibold tracking-widest ${
                isActive ? "text-[#FF5A3C]" : "text-[#2d2d2d]"
              }`
            }
          >
            CONTACT US
          </NavLink>

          <button className="flex items-center justify-center gap-2 bg-[#F1F1F1] hover:bg-[#E7E7E7] rounded-full py-2 text-[14px] font-semibold text-[#1E2A5A] transition">
            <TbMessageCircle className="text-[18px]" />
            Inquire Now
          </button>
        </div>
      </div>
    </div>
  );
}