import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Pictures from "./Components/Pictures";
import Videos from "./Components/Videos";
import "./App.css";

function App() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timerRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    timerRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // Adjust the delay as needed
  };

  const cancelCloseDropdown = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  useEffect(() => {
    return () => {
      cancelCloseDropdown();
    };
  }, []);

  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Logo</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Contact">Contact Us</NavLink>

          {/* Portfolio link with dropdown for larger screens */}
          <div
            className={`dropdown-button ${isDropdownOpen ? "open" : ""}`}
            onClick={toggleDropdown}
            onBlur={closeDropdown}
            onFocus={cancelCloseDropdown}
            tabIndex="0"
            ref={dropdownRef}
          >
            <span>Portfolio</span>
            <FontAwesomeIcon
              icon={faCaretDown}
              className={`dropdown-icon ${isDropdownOpen ? "rotate" : ""}`}
            />
            <div className={`dropdown-content ${isDropdownOpen ? "open" : ""}`}>
              <NavLink to="/Portfolio/Pictures">Pictures</NavLink>
              <NavLink to="/Portfolio/Videos">Videos</NavLink>
            </div>
          </div>

          {/* Hamburger menu icon for smaller screens */}
          <div
            className={`hamburger-icon ${isDropdownOpen ? "open" : ""}`}
            onClick={toggleDropdown}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Portfolio/Pictures" element={<Pictures />} />
          <Route path="/Portfolio/Videos" element={<Videos />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
