import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import cards from "../resources/data";
import { RootState } from "../resources/store";
import { Card, GameState } from "../utils/schema";

const initialState: GameState = {
  allCards: cards,
  flippedCards: [],
};
const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    flipCard(state, action: PayloadAction<Card>) {
      const selectedCard = action.payload;
      const { id } = selectedCard;
      const isAlreadyFlipped = state.flippedCards.find(
        (card) => card.id === id
      );
      if (isAlreadyFlipped) {
        state.flippedCards = state.flippedCards.filter(
          (card) => card.id !== id
        );
      } else {
        state.flippedCards.push(selectedCard);
      }
      if (state.flippedCards.length === 2) {
        if (state.flippedCards[0].name === state.flippedCards[1].name) {
          console.log('cards are equal');
        }
      }
    },
  },
});

export const { flipCard } = gameSlice.actions;
export const selectFlippedCards = (state: RootState) => state.game.flippedCards;
export const selectAllCards = (state: RootState) => state.game.allCards;

export default gameSlice.reducer;
