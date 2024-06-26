/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import Logo from "../../assets/Logo.png";
import Search from "../../assets/search.png";
import Burger from "./../../assets/burger.png";
import "./Header.scss";

export function Header({ setIsBurgerMenuOpen, setSearchQuery }) {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const debounceTimerRef = useRef(null);

  const toggleSearchVisibility = () => {
    setSearchIsOpen((prevState) => !prevState);
  };

  const handleSearchInputChange = (event) => {
    clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = setTimeout(() => {
      setSearchQuery(event.target.value);
    }, 300);
  };

  return (
    <header>
      <div className="header-top container">
        <div
          className="burger-container"
          onClick={() => setIsBurgerMenuOpen(true)}
        >
          <img src={Burger} alt="burger-icon" />
        </div>
        <div className="logo-container">
          <img src={Logo} alt="logo" />
        </div>
        <div className="search-container">
          <div className="input-container">
            <input
              type="text"
              className={`search-input ${searchIsOpen ? "search-open" : ""}`}
              placeholder="Search..."
              onChange={handleSearchInputChange}
            />
          </div>
          <img
            src={Search}
            alt="search-icon"
            onClick={toggleSearchVisibility}
          />
        </div>
      </div>
    </header>
  );
}
