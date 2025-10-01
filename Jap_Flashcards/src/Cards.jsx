const Cards = ( {question, answer} ) => {
  return(
    <div className="cardTemplate">
      <div className="question">{question}</div>
      <div className="answer">{answer}</div>
    </div>
  )
}

export default Cards;