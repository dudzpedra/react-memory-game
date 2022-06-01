import "./App.scss";
import CardGrid from "./components/CardGrid";
import cards from "./resources/data";

function App() {
  const shuffleCards = () => {
    const sortedCards = [...cards].sort(() => Math.random() - 0.5);
    console.log(sortedCards);
  };
  return (
    <div className="app">
      <h3>Memory Game</h3>
      <button onClick={shuffleCards}>New Game</button>
      <CardGrid />
    </div>
  );
}

export default App;
