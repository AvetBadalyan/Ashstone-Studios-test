/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Modal } from "../Modal/Modal";
import "./Cards.scss";

export function Cards({ searchQuery }) {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  const filteredCards = cards.filter((card) => {
    const title = card.title.toLowerCase();
    const text = card.text.toLowerCase();
    const query = searchQuery.toLowerCase();
    return title.includes(query) || text.includes(query);
  });

  const CardContent = ({ card }) => {
    return (
      <>
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
      </>
    );
  };

  return (
    <main>
      <section className="container cards-container">
        {filteredCards.map((card, index) => (
          <div className="card" key={index} onClick={() => openModal(card)}>
            <CardContent card={card} />
          </div>
        ))}
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedCard && (
          <div className="modal-card">
            <CardContent card={selectedCard} />
          </div>
        )}
      </Modal>
    </main>
  );
}
