import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-3 mt-2">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} SP Technology.Prv.Limited Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
