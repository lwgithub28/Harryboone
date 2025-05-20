// src/Loader.js
import React from "react";
import "./Preloader.css"; // Optional: For custom styling

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      Loading...
    </div>
  );
};

export default Loader;
