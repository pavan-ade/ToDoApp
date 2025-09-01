import React, { useEffect, useState } from "react";

const ThemeContent = () => {
  const [toggleTheme, settoggleTheme] = useState("dark");
  useEffect(() => {
    const body = window.document.body;
    // console.log(body, "body");
    if (toggleTheme !== "dark") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [toggleTheme]);
  return (
    <div className="fixed md:top-10 lg:right-40 md:right-20 xs:right-4 xs:top-4 dark:bg-gray-900 dark:text-white z-50">
      {toggleTheme == "light" && (
        <button onClick={() => settoggleTheme("dark")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M21.75 15.002A9.72 9.72 0 0112 21.75C6.477 21.75 2 17.273 2 11.75c0-4.49 3.067-8.268 7.258-9.437.487-.131.931.316.802.802A7.5 7.5 0 0012 19.5a7.5 7.5 0 009.752-4.498c.129-.486-.316-.933-.802-.802z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      {toggleTheme == "dark" && (
        <button onClick={() => settoggleTheme("light")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25M12 18.75V21m9-9h-2.25M5.25 12H3m15.364-6.364-1.591 1.591M7.227 16.773l-1.591 1.591m0-11.182 1.591 1.591M16.773 16.773l1.591 1.591M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ThemeContent;
