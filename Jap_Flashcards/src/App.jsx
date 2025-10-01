import { useState } from 'react';
import './App.css';
import Cards from './Cards.jsx';

const App = () => {
  const [idx, setIdx] = useState(0);
  
  const next = () => setIdx(i => (i + 1) % cardData.length);

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

  return (
    <div className="App">
      <div className="header">
        <h1>Japanese Flashcards</h1>
        <h2>Want to know how to speak simple Japanese? Lets learn!</h2>
        <p>Number of cards: {cardData.length}</p>
      </div>
      <div className="cards">
        <Cards 
          question={cardData[idx].question}
          answer={cardData[idx].answer}
        />
      </div>
      <div className="Control">
        <button onClick={next}>Next</button>
      </div>
    </div>
  )
}

export default App