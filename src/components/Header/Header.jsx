import { useState } from "react";
import Logo from "../../assets/Logo.png";
import Search from "../../assets/search.png";
import "./Header.scss";

export function Header() {
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  const toggleSearchVisibility = () => {
    setSearchIsOpen(!searchIsOpen);
  };

  return (
    <header className="header-top container">
      <div className="burger-container"></div>
      <div className="logo-container">
        <img src={Logo} alt="logo" />
      </div>
      <div className="search-container">
        <div className="input-container">
          <input
            type="text"
            className="search-input"
            style={{ transform: `translateX(${searchIsOpen ? "0" : "100%"})` }}
            placeholder="Search..."
          />
        </div>
        <img src={Search} alt="search-icon" onClick={toggleSearchVisibility} />
      </div>
    </header>
  );
}
