import './App.css';
import Die from './components/Die'
import {useState} from 'react'

function App() {
  const [diceArray, setDiceArray] = useState(generateRandArr());

  function generateRandArr() {
    const randArr = [];
    for (let i = 0; i <= 9; i++) {
      randArr.push(Math.ceil(Math.random() * 6))
    }
    return randArr;
  }
  const dice = diceArray.map(el => {
    return (
      <Die key={Math.random()} value={el} />
    )
  })

  console.log(generateRandArr())
  return (
   <main>
    <div className='dice-container'>
      {dice}
    </div>
   </main>
  );
}

export default App;
