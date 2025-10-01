import { useState } from 'react';
import './App.css';
import Cards from './Cards.jsx';

const App = () => {
  const [click, whenClicked] = useState(0);
  const updateClick = () => whenClicked(click);

  return (
    <div className="App">
      <div className="header">
        <h1>Japanese Flashcards</h1>
        <h2>Want to know how to speak simple Japanese? Lets learn!</h2>
        <p>Number of cards: 10</p>
      </div>
      <div className="cards" onClick={updateClick}>
        <Cards 
          question="Hello"
          answer="Konnichiwa"
        />
        <Cards 
          question="Goodbye"
          answer="Sayonara"
        />
        <Cards 
          question="Thank you"
          answer="Arigatou"
        />
        <Cards 
          question="Yes"
          answer="Hai"
        />
        <Cards 
          question="No"
          answer="Iie"
        />
        <Cards 
          question="Please"
          answer="Onegaishimasu"
        />
        <Cards 
          question="Excuse me / I'm sorry"
          answer="Sumimasen"
        />
        <Cards 
          question="Good morning"
          answer="Ohayou gozaimasu"
        />
        <Cards 
          question="Good night"
          answer="Oyasuminasai"
        />
        <Cards 
          question="Good afternoon"
          answer="Kunbanwa"
        />
      </div>

    </div>
  )
}

export default App