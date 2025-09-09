import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-900 text-white py-3">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} PS Technology.Prv.Limited Company. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
