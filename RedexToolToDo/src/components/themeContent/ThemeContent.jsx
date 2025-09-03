import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

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
    <div className="fixed md:top-10 lg:right-40 md:right-20 xs:right-4 xs:top-4 dark:text-white z-50">
      {toggleTheme == "light" && (
        <button onClick={() => settoggleTheme("dark")}>
          <Moon />
        </button>
      )}
      {toggleTheme == "dark" && (
        <button onClick={() => settoggleTheme("light")}>
          <Sun />
        </button>
      )}
    </div>
  );
};

export default ThemeContent;
