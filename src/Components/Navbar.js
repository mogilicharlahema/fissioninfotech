import React, { useState } from "react";
import { FiSun, FiMoon, FiChevronDown, FiArrowRight } from "react-icons/fi";
import "../styles/Navbar.css"; // update path if your structure differs
import fisimlogo from "../images/fisimlogo.png"

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [openMenu, setOpenMenu] = useState(null);

  // Close only when focus moved outside the li container (better keyboard behaviour)
  const handleBlur = (e) => {
    const current = e.currentTarget;
    const related = e.relatedTarget;
    if (!related || !current.contains(related)) {
      setOpenMenu(null);
    }
  };

  return (
    <nav className="navbar">
     <div className="logo">
  <img src={fisimlogo} alt="logo" className="logo-img" />
  <span className="logo-text">leo9</span>
</div>


      <ul className="nav-links">
        <li className="nav-item">
          <button className="nav-btn">Work</button>
        </li>

        {/* Services */}
        <li
          className={`has-dropdown ${openMenu === "services" ? "open" : ""}`}
          onMouseEnter={() => setOpenMenu("services")}
          onMouseLeave={() => setOpenMenu(null)}
          onFocus={() => setOpenMenu("services")}
          onBlur={handleBlur}
        >
          <button className="nav-btn" aria-expanded={openMenu === "services"}>
            <span className="label-text">
              Services
              <span className="dot" aria-hidden>
                •
              </span>
              <FiChevronDown size={14} className="chev" aria-hidden />
            </span>
          </button>

          {openMenu === "services" && (
            <div className="mega-menu" role="menu" aria-label="Services">
              <div className="menu-card design" role="menuitem" tabIndex="0">
                <h3>Design.</h3>
                <p>Handcraft the user experience.</p>
                <span className="card-arrow">
                  <FiArrowRight size={20} />
                </span>
              </div>

              <div className="menu-card technology" role="menuitem" tabIndex="0">
                <h3>Technology.</h3>
                <p>Leverage the power of code.</p>
                <span className="card-arrow">
                  <FiArrowRight size={20} />
                </span>
              </div>

              <div className="menu-card marketing" role="menuitem" tabIndex="0">
                <h3>Marketing.</h3>
                <p>Creative strategies for brands.</p>
                <span className="card-arrow">
                  <FiArrowRight size={20} />
                </span>
              </div>
            </div>
          )}
        </li>

        <li className="nav-item">
          <button className="nav-btn">Clients</button>
        </li>

        {/* About */}
        <li
          className={`has-dropdown ${openMenu === "about" ? "open" : ""}`}
          onMouseEnter={() => setOpenMenu("about")}
          onMouseLeave={() => setOpenMenu(null)}
          onFocus={() => setOpenMenu("about")}
          onBlur={handleBlur}
        >
          <button className="nav-btn" aria-expanded={openMenu === "about"}>
            <span className="label-text">
              About
              <span className="dot" aria-hidden>
                •
              </span>
              <FiChevronDown size={14} className="chev" aria-hidden />
            </span>
          </button>

          {openMenu === "about" && (
            <div className="mega-menu" role="menu" aria-label="About">
              <div className="menu-card design" role="menuitem" tabIndex="0">
                <h3>About Us.</h3>
                <p>We are super-efficient yet humble to serve you!</p>
                <span className="card-arrow">
                  <FiArrowRight size={20} />
                </span>
              </div>

              <div className="menu-card technology" role="menuitem" tabIndex="0">
                <h3>Team.</h3>
                <p>We are proud of our experienced and accomplished team!</p>
                <span className="card-arrow">
                  <FiArrowRight size={20} />
                </span>
              </div>

              <div className="menu-card marketing" role="menuitem" tabIndex="0">
                <h3>Career.</h3>
                <p>Can you offer such experience?</p>
                <span className="card-arrow">
                  <FiArrowRight size={20} />
                </span>
              </div>
            </div>
          )}
        </li>

        <li className="nav-item">
          <button className="nav-btn">Knowledge</button>
        </li>
      </ul>

      <div className="right-actions">
        <button className="theme-btn" onClick={toggleDarkMode} aria-label="Toggle theme">
          {darkMode ? <FiMoon size={40} /> : <FiSun size={40} />}
        </button>
        <button className="contact-btn">Contact</button>
      </div>
    </nav>
    
  );
};

export default Navbar;
