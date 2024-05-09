import "./App.scss";
import { Cards } from "./components/Cards/Cards";
import { Header } from "./components/Header/Header";

export function App() {
  return (
    <div>
      <Header />
      <Cards />
      <footer></footer>
    </div>
  );
}
