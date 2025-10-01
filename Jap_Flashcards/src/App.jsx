import { useState } from 'react';
import './App.css';

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

      </div>

    </div>
  )
}

export default App