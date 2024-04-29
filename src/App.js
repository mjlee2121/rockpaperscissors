import './App.css';
import Box from './component/Box'
import { useState } from 'react';

// 1. create two boxes (title, picture, result)
// 2. button (rock, paper, scissors). 
// 3. When clicking, it re-renders the boxes
// 4. computer should randomly select item
// 5. compare the 3, 4 results and see who's the winner 
// 6. depends on the result, change color of boxes(win-green, lose-red, tie-black)

const choice = {
  rock: {
    name: 'rock',
    img: '/Users/minjilee/Project/rockpaperscissors/rock.jpg'
  },
  scissors: {
    name: 'scissors',
    img: 'https://www.bakerross.com/media/catalog/product/r/u/ruler-scissors-k930.jpg'
  },
  paper: {
    name: 'paper',
    img: '/Users/minjilee/Project/rockpaperscissors/paper.jpg'
  }
}

function App() {

  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")


  const play = (userChoice)=>{
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)

    setResult(judgementUser(choice[userChoice], computerChoice))

  }

  const judgementUser = (user, computer) => {
    
    if (user.name == computer.name){
      return "tie"
    }else if (user.name=='rock') return computer.name=='scissors'?'win':'lose'
    else if(user.name=='scissors') return computer.name=='paper'?'win':'lose'
    else if(user.name=='paper') return computer.name=='rock'?'win':'lose'

  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice) // make array with the keys
    let randomItem = Math.floor(Math.random() * itemArray.length)
    let final = itemArray[randomItem]
    
    return choice[final]
  }

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className='main'>
        <button onClick={()=> play('scissors')}>Scissors</button>
        <button onClick={()=> play('rock')}>Rock</button>
        <button onClick={()=> play('paper')}>Paper</button>
      </div>
    </div>

  );
}

export default App;
