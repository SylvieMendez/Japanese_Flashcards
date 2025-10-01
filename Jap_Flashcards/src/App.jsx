import { useState } from 'react';
import './App.css';
import Cards from './Cards.jsx';

const App = () => {
  const [idx, setIdx] = useState(0);
  
  const next = () => setIdx(i => (i + 1) % Cards.length);

  const cardData = [
    {id: 1, question: 'Hello', answer: 'Konnichiwa'},
    {id: 2, question: 'Goodbye', answer: 'Sayonara'},
    {id: 3, question: 'Thank you', answer: 'Arigatou'},
    {id: 4, question: 'Yes', answer: 'Hai'},
    {id: 5, question: 'No', answer: 'Iie'},
    {id: 6, question: 'Please', answer: 'Kudasai'},
    {id: 7, question: 'Excuse me / I\'m sorry', answer: 'Sumimasen'},
    {id: 8, question: 'Good morning', answer: 'Ohayou gozaimasu'},
    {id: 9, question: 'Good night', answer: 'Oyasuminasai'},
    {id: 10, question: 'How are you?', answer: 'Ogenki desu ka?'}
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