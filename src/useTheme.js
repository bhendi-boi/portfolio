import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const choosenTheme = theme !== "dark" ? "dark" : "light";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(choosenTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, choosenTheme]);
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return [choosenTheme, toggleTheme];
};

export default useTheme;
