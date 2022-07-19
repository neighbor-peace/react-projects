import './App.css';
import Die from './components/Die'
import {useState, useEffect} from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'


function App() {
  const [diceArray, setDiceArray] = useState(generateRandArr());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const value = diceArray[0].value;
    if (diceArray.every(obj => obj.isHeld && obj.value === value)) {
      setTenzies(true);
    }
  }, [diceArray]);

  function generateRandArr() {
    const diceArr = [];
    for (let i = 0; i <= 9; i++) {
      diceArr.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return diceArr;
  }

  function rollDice() {
    setDiceArray(prevArray => prevArray.map(obj => {
        return obj.isHeld ? obj : 
          {...obj, value: Math.ceil(Math.random() * 6)}
      })
    );
  }

  function holdDice(id) {
    setDiceArray(prevArray => {
      return prevArray.map(obj => {
        return obj.id !== id ? obj : {
          ...obj,
          isHeld: !obj.isHeld,
        }
      })
    })
  }

  function newGame() {
    setDiceArray(generateRandArr());
    setTenzies(false);
  }

  const dice = diceArray.map(diceObj => {
    return (
      <Die 
        value={diceObj.value} 
        isHeld={diceObj.isHeld} 
        key={diceObj.id} 
        handleClick={() => holdDice(diceObj.id)}
      />
    )
  });

  return (
   <main>
    {tenzies && <Confetti />}
    <h1 className="title">Tenzies</h1>
      <p className="instructions">{
        tenzies ? 'You Win!' :
        `Roll until all dice are the same. Click each die to freeze it at its current value between rolls.`
      }</p>
    <div className='dice-container'>
      {dice}
    </div>
    <button className='roll-dice' onClick={tenzies ? newGame : rollDice} >
      {tenzies ? 'New Game' : 'Roll'}
    </button>
   </main>
  );
}

export default App;
