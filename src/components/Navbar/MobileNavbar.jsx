/* eslint-disable react/prop-types */
import { menuItems } from "./menuItems";
import { MenuItem } from "./MenuItem";
import Logo from "./../../assets/Logo.png";
import Close from "./../../assets/close.png";
import "./Navbar.scss";

export function MobileNavbar({ isOpen, setIsBurgerMenuOpen }) {
  return (
    <>
      {isOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setIsBurgerMenuOpen(false)}
        ></div>
      )}
      <div className={`mobile-navbar ${isOpen ? "open" : ""}`}>
        <header className="mobile-header">
          <div className="mobile-logo-container">
            <img src={Logo} alt="logo" />
          </div>
          <div
            className="mobile-close-container"
            onClick={() => setIsBurgerMenuOpen(false)}
          >
            <img src={Close} alt="close-btn" />
          </div>
        </header>
        <div className="mobile-navigation-list">
          {menuItems.map((menuItem) => (
            <MenuItem key={menuItem.label} menuItem={menuItem} />
          ))}
        </div>
      </div>
    </>
  );
}
