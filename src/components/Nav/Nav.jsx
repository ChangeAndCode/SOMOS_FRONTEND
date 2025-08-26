import { Link } from "react-router-dom";
import ThemeToggleButton from "../ThemeToggleBtn";
import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [showIcons, setShowIcons] = useState(false);
  const navDropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        navDropdownRef.current &&
        !navDropdownRef.current.contains(e.target)
      ) {
        setShowIcons(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-20 font-light">

      <svg
        id="bgSvg"
        className="fixed top-0 left-0 w-screen h-[75px] md:h-[100px] pointer-events-none -z-10"
        viewBox="0 0 1440 130"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="paint0_linear_17_3"
            x1="0"
            y1="41"
            x2="1440"
            y2="41"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#363636" />
            <stop offset="16%" stopColor="#8A3677" />
            <stop offset="77%" stopColor="#00ACA6" />
            <stop offset="100%" stopColor="#CBCBCB" />
          </linearGradient>
        </defs>
        <path
          d="M0 0V126C412 7 1440 145 1440 0H0Z"
          fill="url(#paint0_linear_17_3)"
          stroke="black"
        />
      </svg>

      {/* Contenido del nav */}
      <div className="flex items-center h-full px-5">
        {/* Logo */}
        <Link to="/">
          <img
            src="./logos/somos-dark_short_margin.png"
            alt="logo"
            className="w-[180px] md:w-[240px]"
          />
        </Link>

        <div className="ml-auto flex items-center gap-4">
          {/* Menú de enlaces (solo desktop) */}
          <div
            id="links"
            className="hidden lg:flex items-center justify-center text-[#d9d9d9] font-bold h-full gap-4"
          >
            <Link
              to="/proyectos"
              className="flex items-center gap-2 hover:text-[var(--primary)]"
            >
              <span>Proyectos</span>
            </Link>
            <span className="hidden lg:inline-block">|</span>
            <Link
              to="/programas"
              className="flex items-center gap-2 hover:text-[var(--primary)]"
            >
              <span>Programas</span>
            </Link>
            <span className="hidden lg:inline-block">|</span>
            <Link
              to="/eventos"
              className="flex items-center gap-2 hover:text-[var(--primary)]"
            >
              <span>Eventos</span>
            </Link>
            <span className="hidden lg:inline-block">|</span>
            <Link
              to="/testimonios"
              className="flex items-center gap-2 hover:text-[var(--primary)]"
            >
              <span>Testimonios</span>
            </Link>
            <span className="hidden lg:inline-block">|</span>
            <a
              href="https://somosunionac.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[var(--primary)]"
            >
              Administración
            </a>
          </div>

          <div id="navDropdown" ref={navDropdownRef} className="relative">
            <button
              onClick={() => setShowIcons((v) => !v)}
              className="block lg:hidden h-10 w-10 grid place-items-center text-white"
              aria-label="Abrir menú"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="h-6 w-6"
              >
                <rect width="256" height="256" fill="none" />
                <line
                  x1="40"
                  y1="64"
                  x2="216"
                  y2="64"
                  stroke="currentColor"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="40"
                  y1="128"
                  x2="216"
                  y2="128"
                  stroke="currentColor"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="40"
                  y1="192"
                  x2="216"
                  y2="192"
                  stroke="currentColor"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {showIcons && (
              <ul
                onClick={() => setShowIcons(false)}
                className="absolute right-0 mt-2 bg-[var(--background)] text-[var(--dark)] rounded-md shadow-lg p-2 flex flex-col gap-1 min-w-[180px]"
              >
                <Link
                  to="/proyectos"
                  className="px-3 py-2 rounded hover:bg-black/5"
                >
                  Proyectos
                </Link>
                <Link
                  to="/programas"
                  className="px-3 py-2 rounded hover:bg-black/5"
                >
                  Programas
                </Link>
                <Link
                  to="/eventos"
                  className="px-3 py-2 rounded hover:bg-black/5"
                >
                  Eventos
                </Link>
                <Link
                  to="/testimonios"
                  className="px-3 py-2 rounded hover:bg-black/5"
                >
                  Testimonios
                </Link>
                <a
                  href="https://somosunionac.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded hover:bg-black/5"
                >
                  Administración
                </a>
              </ul>
            )}
          </div>

          <div className="flex items-center">
            <ThemeToggleButton toogle={null} />
          </div>
        </div>
      </div>
    </nav>
  );
}
