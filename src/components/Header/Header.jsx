import Logo from "./../../assets/Logo.png";
import Search from "./../../assets/search.png";
import Down from "./../../assets/arrow-down.png";
import "./Header.scss";
import { useState } from "react";

export function Header() {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const toggleSearchVisibility = () => {
    setSearchIsOpen(!searchIsOpen);
  };
  const menuItems = [
    { label: "Demos", submenu: ["Demo 1", "Demo 2", "Demo 3"] },
    {
      label: "Post",
      submenu: [
        "Post Header",
        "Post Gallery",
        "Post Layout",
        "Share Buttons",
        "Gallery Post",
        "Video Post",
      ],
    },
    { label: "Features", submenu: ["Feature 1", "Feature 2", "Feature 3"] },
    {
      label: "Categories",
      submenu: ["Category 1", "Category 2", "Category 3"],
    },
    { label: "Shop", submenu: ["Product 1", "Product 2", "Product 3"] },
    { label: "Buy Now" },
  ];

  return (
    <header className="header">
      <div className="header-top container">
        <div className="burger-container"></div>
        <div className="logo-container">
          <img src={Logo} alt="logo" />
        </div>
        <div className="search-container">
          <div className="input-container">
            <input
              type="text"
              style={{
                transform: `translateX(${searchIsOpen ? "0" : "100%"})`,
              }}
              placeholder="Search..."
            />
          </div>
          <img
            src={Search}
            alt="search-icon"
            onClick={toggleSearchVisibility}
          />
        </div>
      </div>

      <div className="navigation-bar">
        <div className="navigation-list">
          {menuItems.map((menuItem, index) => (
            <button className="navigation-item" key={index}>
              <span>{menuItem.label}</span>
              {menuItem.submenu && <img src={Down} alt="arrow-down" />}
              {menuItem.submenu && (
                <div className="submenu">
                  {menuItem.submenu.map((subItem, subIndex) => (
                    <div className="submenu-item" key={subIndex}>
                      <span>{subItem}</span>{" "}
                      <img src={Down} alt="right-arrow" />
                    </div>
                  ))}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
