import { useState } from 'react';

const Cards = ( {question, answer} ) => {

  const [flipped, setFlipped] = useState(false);

  const handleClick = () => setFlipped(f => !f);

  return(
    <div className="cardTemplate" onClick={handleClick}>
      <div className="question">{flipped ? answer: question}</div>
    </div>
  )
}

export default Cards;