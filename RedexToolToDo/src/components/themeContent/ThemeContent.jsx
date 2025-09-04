import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { handleTheme } from "../../js/jsUitls/utils";
const ThemeContent = () => {
  const [toggleTheme, settoggleTheme] = useState("dark");
  useEffect(() => {
    handleTheme(toggleTheme);
  }, [toggleTheme]);
  return (
    <div className="absolute md:top-10 lg:right-40 md:right-20 xs:right-4 xs:top-4 dark:text-white z-50">
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
