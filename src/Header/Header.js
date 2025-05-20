import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Header.css";
import "../Components/style.css";

const Header = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  const handleNavLinkClick = (linkName) => {
    setActiveLink(linkName);
    setSideMenuOpen(false); // Close the sidebar
  };

  useEffect(() => {
    const closeSideMenuOutside = (event) => {
      const sideNav = document.getElementById("side-nav");
      const navIcon = document.getElementById("nav-icon");
      if (!sideNav.contains(event.target) && !navIcon.contains(event.target)) {
        setSideMenuOpen(false);
      }
    };

    if (sideMenuOpen) {
      document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      document.addEventListener("click", closeSideMenuOutside);
    } else {
      document.body.style.backgroundColor = "";
      document.removeEventListener("click", closeSideMenuOutside);
    }

    return () => {
      document.removeEventListener("click", closeSideMenuOutside);
    };
  }, [sideMenuOpen]);

  return (
    <>
      <div className="container">
        <div id="navbar">
          <div className="container top-logo">
            <div className="logo">
              <span>
                {" "}
                <a href="/" title="logo">
                  <h1>
                    harry <span>boone</span>
                  </h1>
                </a>
              </span>
            </div>
            <span className="social-icons">
              <a
                href="https://www.facebook.com/harry.w.boone"
                target="_blank"
                title="social-icon"
              >
                <span className="facebook icon-svg">
                  <FaFacebookF />
                </span>
              </a>
              {/* <a href='/'><span className='linkedin icon-svg'><FaLinkedinIn /></span></a> */}
            </span>
          </div>
        </div>
        <div className="navbar">
          <div id="nav-icon">
            <a className="open-btn" onClick={toggleSideMenu} title="open-nav">
              &#9776;
            </a>
          </div>
          <nav id="nav-menu">
            <Link
              to="/"
              className={`nav-link ${activeLink === "HOME" ? "active" : ""}`}
              onClick={() => handleNavLinkClick("HOME")}
              title="home"
            >
              HOME
            </Link>
            <Link
              to="/gallery"
              title="gallery"
              className={`nav-link ${activeLink === "GALLERY" ? "active" : ""}`}
              onClick={() => handleNavLinkClick("GALLERY")}
            >
              GALLERY{" "}
            </Link>
            {/* <li className="nav-item for-dropdown">
                            <Link to="/gallery" title='gallery' className={`nav-link ${activeLink === 'GALLERY' ? 'active' : ''}`} onClick={() => handleNavLinkClick('GALLERY')}>GALLERY </Link><span className='dropdown'><IoMdArrowDropdown />
                            <ul className="dropdown-content">
                                <li><Link to="/Selected-Recent-Works" title="Selected-Recent-Works" rel="noopener noreferrer" className="dropdown-item" onClick={() => handleNavLinkClick('GALLERY')}>SELECTED RECENT WORKS(2000-PRESENT)</Link></li>
                                <li><Link to="/Selected-Early-Works" title="Selected-Early-Works" rel="noopener noreferrer" className="dropdown-item" onClick={() => handleNavLinkClick('GALLERY')}>SELECTED EARLY WORKS(1982-1999)</Link></li>
                            </ul>
                            </span>
                        </li> */}
            <Link
              to="/about-the-artist"
              title="about-the-artist"
              className={`nav-link ${
                activeLink === "ABOUT THE ARTIST" ? "active" : ""
              }`}
              onClick={() => handleNavLinkClick("ABOUT THE ARTIST")}
            >
              ABOUT THE ARTIST
            </Link>
            <Link
              to="/artist-statement"
              title="artist-statement"
              className={`nav-link ${
                activeLink === "ARTIST'S STATEMENT" ? "active" : ""
              }`}
              onClick={() => handleNavLinkClick("ARTIST'S STATEMENT")}
            >
              ARTIST'S STATEMENT
            </Link>
            <Link
              to="/press"
              title="press"
              className={`nav-link ${activeLink === "PRESS" ? "active" : ""}`}
              onClick={() => handleNavLinkClick("PRESS")}
            >
              PRESS
            </Link>
            <Link
              to="/cv-resume"
              title="cv-resume"
              className={`nav-link ${
                activeLink === "CV/RESUME" ? "active" : ""
              }`}
              onClick={() => handleNavLinkClick("CV/RESUME")}
            >
              CV/RESUME
            </Link>
            <Link
              to="/contact"
              title="contact"
              className={`nav-link ${activeLink === "CONTACT" ? "active" : ""}`}
              onClick={() => handleNavLinkClick("CONTACT")}
            >
              CONTACT
            </Link>
          </nav>
          <div id="side-nav" className={sideMenuOpen ? "open" : ""}>
            <a className="close-btn" onClick={toggleSideMenu} title="close-btn">
              <IoMdClose />
            </a>
            <Link
              to="/"
              title="sideNav-home"
              className={`nav-link ${activeLink === "HOME" ? "active" : ""}`}
              onClick={() => handleNavLinkClick("HOME")}
            >
              HOME
            </Link>
            <Link
              to="/gallery"
              title="gallery"
              className={`nav-link ${activeLink === "GALLERY" ? "active" : ""}`}
              onClick={() => handleNavLinkClick("GALLERY")}
            >
              GALLERY{" "}
            </Link>
            {/* <li className="nav-item for-dropdown">
                            <Link to="/gallery" title='gallery' className={`nav-link ${activeLink === 'GALLERY' ? 'active' : ''}`} onClick={() => handleNavLinkClick('GALLERY')}>GALLERY </Link><span className='dropdown'><IoMdArrowDropdown />
                                <ul className="dropdown-content">
                                    <li><Link to="/Selected-Recent-Works" title="Selected-Recent-Works" rel="noopener noreferrer" className="dropdown-item" onClick={() => handleNavLinkClick('GALLERY')}>SELECTED RECENT WORKS(2000-PRESENT)</Link></li>
                                    <li><Link to="/Selected-Early-Works" title="Selected-Early-Works" rel="noopener noreferrer" className="dropdown-item" onClick={() => handleNavLinkClick('GALLERY')}>SELECTED EARLY WORKS(1982-1999)</Link></li>
                                </ul>
                            </span>
                        </li> */}
            <Link
              to="/about-the-artist"
              title="sideNav-about-the-artist"
              className={`nav-link ${
                activeLink === "ABOUT THE ARTIST" ? "active" : ""
              }`}
              onClick={() => handleNavLinkClick("ABOUT THE ARTIST")}
            >
              ABOUT THE ARTIST
            </Link>
            <Link
              to="/artist-statement"
              title="sideNav-artist-statement"
              className={`nav-link ${
                activeLink === "ARTIST'S STATEMENT" ? "active" : ""
              }`}
              onClick={() => handleNavLinkClick("ARTIST'S STATEMENT")}
            >
              ARTIST'S STATEMENT
            </Link>
            <Link
              to="/press"
              title="sideNav-press"
              className={`nav-link ${activeLink === "PRESS" ? "active" : ""}`}
              onClick={() => handleNavLinkClick("PRESS")}
            >
              PRESS
            </Link>
            <a href="/HarryWaltonBoone.pdf" target="_blank">
              CV
            </a>
            <Link
              to="/contact"
              title="sideNav-contact"
              className={`nav-link ${activeLink === "CONTACT" ? "active" : ""}`}
              onClick={() => handleNavLinkClick("CONTACT")}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
