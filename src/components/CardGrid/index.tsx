import cards from "../../resources/data";
import FlipCard from "../FlipCard";
import "./styles.scss";

const CardGrid = () => {
  return (
    <div className="grid">
      {cards.map((card) => (
        <FlipCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;
