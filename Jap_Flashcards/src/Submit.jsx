const handleSubmit = ({guess, cardData, idx, setResult, setShowAnswer}) => {

  const user = guess.trim().toLowerCase();
  const ans = cardData[idx].answer.trim().toLowerCase();
  const ok = user === ans;
  setResult(ok ? "correct" : "incorrect");
  setShowAnswer(true);
}

 export default handleSubmit;
