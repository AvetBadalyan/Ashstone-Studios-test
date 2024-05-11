import { useState } from "react";
import "./App.scss";
import { Cards } from "./components/Cards/Cards";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { MobileNavbar } from "./components/Navbar/MobileNavbar";

export function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <>
      <Header setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
      <Navbar />
      <MobileNavbar
        isOpen={isBurgerMenuOpen}
        setIsBurgerMenuOpen={setIsBurgerMenuOpen}
      />
      <Cards />
    </>
  );
}
