import { useRef, useEffect, useState } from "react";
import { menuItems } from "./menuItems";
import "./Navbar.scss";
import { MenuItem } from "./MenuItem";

export function Navbar() {
  const navbarRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setIsSticky(currentPosition > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`navigation-bar ${isSticky ? "sticky" : ""}`}
    >
      <div className="navigation-list">
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.label} menuItem={menuItem} />
        ))}
      </div>
    </nav>
  );
}
