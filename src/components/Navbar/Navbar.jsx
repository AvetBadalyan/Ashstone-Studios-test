import { useState, useEffect, useRef } from "react";
import { menuItems } from "./menuItems";
import "./Navbar.scss";
import { MenuItem } from "./MenuItem";

export function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const navigationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navigationRef.current) {
        setIsSticky(window.scrollY > navigationRef.current.offsetTop + 200);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navigation-bar ${isSticky ? "sticky" : ""}`}
      ref={navigationRef}
    >
      <div className="navigation-list">
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.label} menuItem={menuItem} />
        ))}
      </div>
    </nav>
  );
}
