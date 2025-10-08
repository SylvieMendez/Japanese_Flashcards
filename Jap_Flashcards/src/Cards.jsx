import { useEffect, useState } from 'react';

const Cards = ( {question, answer, idx} ) => {

  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped(false);
  }, [idx]);

  const handleClick = () => setFlipped(f => !f);

  return(
    <div className="cardTemplate" onClick={handleClick}>
      <div className="question">{flipped ? answer: question}</div>
    </div>
  )
}

export default Cards;