import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { selectCards } from './cardsSlice'

export default function Card({ id }) {
  const cards = useSelector(selectCards); // replace this with a call to your selector to get all the cards in state
  const card = cards[id];
  const [flipped, setFlipped] = useState(true);

  return (
    <li>
      {card.back}
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.card.back : card.card.front}
      </button>
    </li>
  );
}
