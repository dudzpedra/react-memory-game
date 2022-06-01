import { useState } from "react"
import { flipCard } from "../../features/gameSlice"
import { useAppDispatch } from "../../resources/store/hooks"
import { Card } from "../../utils/schema"
import './styles.scss'

const FlipCard = (card: Card) => {
  const [flip, setFlip] = useState(false)
  const dispatch = useAppDispatch()
  const handleClick = () => {
    setFlip(!flip)
    dispatch(flipCard(card))
  }
  return (
    <div className={`card ${flip ? 'flip' : ''}`} onClick={handleClick}>
      <div className="front">
        <img src={card.backUrl} alt={card.name} />
      </div>
      <div className="back">
        <img src={card.frontUrl} alt={card.name} />
      </div>
    </div>
  )
}

export default FlipCard