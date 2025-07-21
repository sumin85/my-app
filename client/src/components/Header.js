import React, {useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

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

  // Firebase 인증 상태 감지
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); // user가 있으면 true, 없으면 false
    });

    return () => unsubscribe(); // 컴포넌트 언마운트 시 리스너 해제
  }, []);

  return(
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          <Link to="/" className="logo">
            <h1 className="logo">Schedule Share</h1>
          </Link>
            <nav className="header-nav">
              <Link to="/notifications" className="icon-button-notification" title="알림">🔔</Link>
              <Link to={isLoggedIn ? "/mypage" : "/login"}  className="icon-button-mypage" title={isLoggedIn ? "마이페이지" : "로그인"}>👤</Link>
            </nav>
        </div>
    </header>
  );
};

export default Header;