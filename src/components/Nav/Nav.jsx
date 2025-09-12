import { Link } from "react-router-dom";
import ThemeToggleButton from "../ThemeToggleBtn";
import { useEffect, useRef, useState } from "react";
import images from "../../../data/images.json";

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
        className="fixed top-0 left-0 w-screen h-[105px] md:h-[135px] pointer-events-none -z-10"
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
      <div className="flex items-center h-full px-5 pr-10 md:pr-32">
        {/* Logo */}
        <Link to="/">
          <img
            src={images.images.logos['somos-dark_short_margin.png']}
            alt="logo"
            className="w-[180px] md:w-[240px]"
          />
        </Link>

        <div className="ml-auto flex items-center gap-4">
          {/* Menú de enlaces (solo desktop) */}
          <div
            id="links"
            className="hidden xl:flex items-center justify-center text-[#d9d9d9] font-bold h-full gap-4"
          >
            <Link
              to="/proyectos"
              className="flex items-center gap-2 hover:text-[var(--primary)]"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M138.54,149.46C106.62,96.25,149.18,43.05,239.63,48.37,245,138.82,191.75,181.38,138.54,149.46Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M88.47,160.47c22.8-38-7.6-76-72.21-72.21C12.46,152.87,50.47,183.27,88.47,160.47Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="56" y1="128" x2="120" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M200,88l-61.25,61.25A64,64,0,0,0,120,194.51V224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
              <span>Proyectos</span>
            </Link>
            <span className="hidden lg:inline-block">|</span>
            <Link
              to="/programas"
              className="flex items-center gap-2 hover:text-[var(--primary)]"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="176" y1="24" x2="176" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="80" y1="24" x2="80" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M128,120a24,24,0,0,1,48,0c0,32-48,56-48,56s-48-24-48-56a24,24,0,0,1,48,0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
              <span>Programas</span>
            </Link>
            <span className="hidden lg:inline-block">|</span>
            <Link
              to="/eventos"
              className="flex items-center gap-2 hover:text-[var(--primary)]"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="152 224 232 48 152 48 112 136 192 136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="112 136 101.09 160 28 160 68 116 28 72 141.09 72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
              <span>Eventos</span>
            </Link>
            <span className="hidden lg:inline-block">|</span>
            <Link
              to="/testimonios"
              className="flex items-center gap-2 hover:text-[var(--primary)]"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="40" r="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M39,102.9C27.31,97.5,31.15,80,44,80H212c12.87,0,16.71,17.5,5,22.9L160,128l22.87,86.93a12,12,0,0,1-21.75,10.14L128,168,94.88,225.07a12,12,0,0,1-21.75-10.14L96,128Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
              <span>Testimonios</span>
            </Link>
            <span className="hidden lg:inline-block">|</span>
            <a
              href="https://somosunionac.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[var(--primary)]"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="108" cy="100" r="60" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="224" cy="136" r="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="224" y1="120" x2="224" y2="108" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="210.14" y1="128" x2="199.75" y2="122" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="210.14" y1="144" x2="199.75" y2="150" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="224" y1="152" x2="224" y2="164" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="237.86" y1="144" x2="248.25" y2="150" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="237.86" y1="128" x2="248.25" y2="122" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
              Sondeos de opinión
            </a>
          </div>

          <div id="navDropdown" ref={navDropdownRef} className="relative">
            <button
              onClick={() => setShowIcons((v) => !v)}
              className="block xl:hidden h-10 w-10 grid place-items-center text-white"
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
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-black/5"
                >
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M138.54,149.46C106.62,96.25,149.18,43.05,239.63,48.37,245,138.82,191.75,181.38,138.54,149.46Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M88.47,160.47c22.8-38-7.6-76-72.21-72.21C12.46,152.87,50.47,183.27,88.47,160.47Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="56" y1="128" x2="120" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M200,88l-61.25,61.25A64,64,0,0,0,120,194.51V224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                  Proyectos
                </Link>
                <Link
                  to="/programas"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-black/5"
                >
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="176" y1="24" x2="176" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="80" y1="24" x2="80" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M128,120a24,24,0,0,1,48,0c0,32-48,56-48,56s-48-24-48-56a24,24,0,0,1,48,0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                  Programas
                </Link>
                <Link
                  to="/eventos"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-black/5"
                >
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="152 224 232 48 152 48 112 136 192 136" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><polyline points="112 136 101.09 160 28 160 68 116 28 72 141.09 72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                  Eventos
                </Link>
                <Link
                  to="/testimonios"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-black/5"
                >
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="40" r="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M39,102.9C27.31,97.5,31.15,80,44,80H212c12.87,0,16.71,17.5,5,22.9L160,128l22.87,86.93a12,12,0,0,1-21.75,10.14L128,168,94.88,225.07a12,12,0,0,1-21.75-10.14L96,128Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                  Testimonios
                </Link>
                <a
                  href="https://somosunionac.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2 rounded hover:bg-black/5"
                >
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="108" cy="100" r="60" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><circle cx="224" cy="136" r="16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="224" y1="120" x2="224" y2="108" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="210.14" y1="128" x2="199.75" y2="122" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="210.14" y1="144" x2="199.75" y2="150" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="224" y1="152" x2="224" y2="164" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="237.86" y1="144" x2="248.25" y2="150" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/><line x1="237.86" y1="128" x2="248.25" y2="122" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/></svg>
                  Sondeos de opinión
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
