export interface Card {
  frontUrl: string
  backUrl: string
  name: string
  isFlipped: boolean
  id: string
}

export interface GameState {
  allCards: Card[]
  flippedCards: Card[]
}