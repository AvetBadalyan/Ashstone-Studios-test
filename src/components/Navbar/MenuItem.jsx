/* eslint-disable react/prop-types */
import Down from "../../assets/arrow-down.png";
import "./Navbar.scss";

export function MenuItem({ menuItem }) {
  const { label, submenu } = menuItem;

  return (
    <div className="navigation-item">
      <span>{label}</span>
      {submenu && <img src={Down} alt="arrow-down" />}
      {submenu && (
        <div className="submenu">
          {submenu.map((subItem, subIndex) => (
            <div className="submenu-item" key={subIndex}>
              <span>{subItem}</span> <img src={Down} alt="right-arrow" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
