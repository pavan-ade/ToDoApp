import React from "react";
import ThemeContent from "../../components/themeContent/ThemeContent";

const Header = () => {
  return (
    <div className="relative p-4">
      <h1 className="text-[30px] md:text-[50px] font-bold text-center">
        Todo App
      </h1>
      <ThemeContent />
    </div>
  );
};

export default Header;
