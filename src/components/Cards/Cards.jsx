import { useState, useEffect } from "react";
import "./Cards.scss";

export function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cloud.codesupply.co/endpoint/react/data.json"
        );
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <section className="container cards-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img
              src={card.img}
              srcSet={`${card.img} 1x, ${card.img_2x} 2x`}
              alt={card.title}
            />
            <div className="tags">{card.tags}</div>
            <h2 className="title">{card.title}</h2>
            <div className="meta">
              <span className="author">{card.autor}</span>
              <span className="date">{card.date}</span>
              <span className="views">{card.views} views</span>
            </div>
            <p className="text">{card.text}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
