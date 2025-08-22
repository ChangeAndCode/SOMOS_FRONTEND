// context/ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

// Creamos el contexto
const ThemeContext = createContext();

// Proveedor de contexto
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    return (
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    const className = "dark-theme";
    if (darkMode) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para usar el contexto
export const useTheme = () => useContext(ThemeContext);
