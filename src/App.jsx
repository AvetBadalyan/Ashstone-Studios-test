import "./App.scss";
import { Cards } from "./components/Cards/Cards";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";

export function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Cards />
      <footer></footer>
    </>
  );
}
