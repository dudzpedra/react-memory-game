import { flipCard, selectFlippedCards } from "../../features/gameSlice";
import { useAppDispatch, useAppSelector } from "../../resources/store/hooks";
import { Card } from "../../utils/schema";
import "./styles.scss";

const GameCard = (card: Card) => {
  const flippedCards = useAppSelector(selectFlippedCards);
  const dispatch = useAppDispatch();

  const toggleFlippedClassname = (id: string) => {
    document.getElementById(id)?.classList.toggle("flipped");
  };
  const handleClick = (card: Card) => {
    toggleFlippedClassname(card.id);
    dispatch(flipCard(card));
  };

  return (
    <div className="card" onClick={() => handleClick(card)}>
      <img
        id={card.id}
        className="card-image"
        src={
          flippedCards.find((c) => c.id === card.id)
            ? card.frontUrl
            : card.backUrl
        }
        alt={card.name}
      />
    </div>
  );
};

export default GameCard;
