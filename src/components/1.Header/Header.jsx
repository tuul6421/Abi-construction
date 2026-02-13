import React, { useState } from "react"; 

// ...existing code...
<header className="header">
  {/* ...existing header content... */}
  <div className="header-size-info">
    7.9k <span style={{fontSize: "0.9em", color: "#888"}}>(gzipped 2.5k)</span>
  </div>
  {/* ...existing header content... */}
</header>
// ...existing code...

import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleScroll = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Remove unnecessary setIsMenuOpen(false); (would reset state every render)

  return (
    <header className="header">
      <img src="/assets/professional-woman-business-attire_1308-175589.jpg.avif" alt="Background" className="header_background_image" />
      <div className="header_left">
        <a href="#home" className="logo" onClick={() => handleScroll("#home")}> 
          Logo
        </a>
        <button className="burger-menu" onClick={toggleMenu}>☰</button>
      </div>
      <nav className={"header_nav " + (isMenuOpen ? "open" : "")}>
        <ul>
          <li><a href="#home" onClick={() => handleScroll("#home")} className="header_link">Home</a></li>
          <li><a href="#project" onClick={() => handleScroll("#project")} className="header_link">Project</a></li>
          <li><a href="#ceo-message" onClick={() => handleScroll("#ceo-message")} className="header_link">CEO Message</a></li>
          <li><a href="#services" onClick={() => handleScroll("#services")} className="header_link">Services</a></li>
          <li><a href="#contact" onClick={() => handleScroll("#contact")} className="header_link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );

};

export default Header;
