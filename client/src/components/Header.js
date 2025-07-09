import React, {useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return(
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-container">
            <h1 className="logo">Schedule Share</h1>
        </div>
    </header>
  )
};

export default Header;