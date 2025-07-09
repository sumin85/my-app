import React, {useState, useEffect } from "react";
import {Link} from "react-router-dom"

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
            <nav className="header-nav">
              <button to="/notifications" className="icon-button-notification" title="알림">🔔</button>
              <button to={isLoggedIn ? "/mypage" : "/login"}  className="icon-button-mypage" title={isLoggedIn ? "마이페이지" : "로그인"}>👤</button>
            </nav>
        </div>
    </header>
  );
};

export default Header;