import './App.css';
import Die from './components/Die'
import {useState} from 'react'
import { nanoid } from 'nanoid'


function App() {
  const [diceArray, setDiceArray] = useState(generateRandArr());

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
    setDiceArray(generateRandArr());
  }

  function holdDice(id) {
    setDiceArray(prevArray => {
      //find index of clicked dice
      const i = prevArray.findIndex(obj => obj.id === id);
      //return spread of spliced prevArray before and after clicked dice, changing clicked dice's isHeld value
      return [
        ...prevArray.slice(0, i),
        {
          value: prevArray[i].value,
          isHeld: !prevArray[i].isHeld,
          id: id
        },
        ...prevArray.slice(i + 1)
      ];

    })
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
    <div className='dice-container'>
      {dice}
    </div>
    <button className='roll-dice' onClick={rollDice} >Roll</button>
   </main>
  );
}

export default App;
