import { useState } from 'react';
import './App.css';
import Cards from './Cards.jsx';
import handleSubmit from './Submit.jsx';

const App = () => {

const cardData = [
    {question: 'Hello', answer: 'Konnichiwa'},
    {question: 'Goodbye', answer: 'Sayonara'},
    {question: 'Thank you', answer: 'Arigatou'},
    {question: 'Yes', answer: 'Hai'},
    {question: 'No', answer: 'Iie'},
    {question: 'Please', answer: 'Kudasai'},
    {question: 'Excuse me / I\'m sorry', answer: 'Sumimasen'},
    {question: 'Good morning', answer: 'Ohayou gozaimasu'},
    {question: 'Good night', answer: 'Oyasuminasai'},
    {question: 'How are you?', answer: 'Ogenki desu ka?'}
  ];

  const [idx, setIdx] = useState(0);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState(null);
  
  
  const atStart = idx === 0;
  const atEnd = idx === cardData.length - 1;

  const next = () => {
    if (idx < cardData.length - 1) {
      setIdx(i => i + 1);
      setGuess("");
      setResult(null);
    }
  };

  const prev = () => {
    if (idx > 0) {
      setIdx(i => i - 1);
      setGuess("");
      setResult(null);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Japanese Flashcards</h1>
        <h2>Want to know how to speak simple Japanese? Lets learn!</h2>
        <p>Number of cards: {cardData.length}</p>
      </div>
      <div className="cards">
        <Cards 
          key={idx}
          question={cardData[idx].question}
          answer={cardData[idx].answer}
        />
      </div>
      <label htmlFor="guess">Your Guess: </label>
      <input 
        id="guess" 
        value={guess}
        onChange={(e) => setGuess(e.target.value)} 
        placeholder="Type the answer here.."
      />
      <button 
        onClick={() => 
          handleSubmit({guess, cardData, idx, setResult})
        }
          disabled={!guess.trim()}
      >
        Submit
      </button>

      <p className={`feedback ${result || ""}`}>
        {result === "correct" ? "✅ Correct!" : result === "incorrect" ? "❌ Not quite." : ""}
      </p>

      <div className="Control">
        <button onClick={prev} disabled={atStart}>Previous</button>
      </div>
      <div className="Control">
        <button onClick={next} disabled={atEnd}>Next</button>
      </div>
    </div>
  )
}

export default App