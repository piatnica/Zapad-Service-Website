import "./Header.css";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`main-header ${isScrolled ? "scrolled" : ""}`}>
      <div
        className={`header-logo-animation ${isScrolled ? "scrolled" : ""}`}
      ></div>

      <div className={`header-logo ${isScrolled ? "scrolled" : ""}`}>
        Запад Сервис
      </div>
      {/* Aktau Service */}

      <nav>
        <ul className={`nav-points ${isScrolled ? "scrolled" : ""}`}>
          <li>
            <a href="#services">Услуги</a>
          </li>
          <li>
            <a href="#about-us">О нас</a>
          </li>
          <li>
            <a href="#orderInstructions">Этапы работы</a>
          </li>
          <li>
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
      </nav>

      <a
        href="https://wa.me/7011224415"
        className={`whatsapp-link ${isScrolled ? "scrolled" : ""}`}
      >
        <img
          src="src\assets\icons\whatsapp-icon-white.png"
          alt="whatsapp"
          width={27}
          height={27}
        />
        WhatsApp
      </a>
      {/* #25d366 */}
    </header>
  );
};

export default Header;
