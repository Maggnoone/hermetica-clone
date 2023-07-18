"use client";
import React from "react";
import { useState, useEffect } from "react";

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModePreferred =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(isDarkModePreferred);
  }, []);

  const handleToggle = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isDarkMode ? "Light mode" : "Dark mode"}
      </button>
      <style jsx global>{`
        :root {
          ${isDarkMode ? "--bg-color: #000" : "--bg-color: #fff"};
          ${isDarkMode ? "--text-color: #fff" : "--text-color: #000"};
        }
        body {
          background-color: var(--bg-color);
          color: var(--text-color);
        }
      `}</style>
    </div>
  );
};

export default DarkModeSwitch;
