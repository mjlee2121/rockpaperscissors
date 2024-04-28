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
    img: 'https://www.google.com/imgres?q=rock&imgurl=https%3A%2F%2Fwww.thoughtco.com%2Fthmb%2FUh06xuGPA6HKNbaxpNsOjR7CjPY%3D%2F1500x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Frhyolite-1057171452-5c911d4b46e0fb000187a397.jpg&imgrefurl=https%3A%2F%2Fwww.thoughtco.com%2Frhyolite-rock-facts-geology-uses-4589452&docid=FTkkdKBDKhS6GM&tbnid=D_Iza-jR-jUvfM&vet=12ahUKEwiru6zRw96FAxVwMVkFHcyODvsQM3oECDMQAA..i&w=1500&h=1000&hcb=2&ved=2ahUKEwiru6zRw96FAxVwMVkFHcyODvsQM3oECDMQAA'
  },
  scissors: {
    name: 'scissors',
    img: 'https://www.bakerross.com/media/catalog/product/r/u/ruler-scissors-k930.jpg'
  },
  paper: {
    name: 'paper',
    img: 'https://www.google.com/imgres?q=paper&imgurl=https%3A%2F%2Fwww.paperpapers.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F0fdd85ad3e4cd2f033aa1145ea027f99%2Fp%2Fl%2Fplike-white-811.jpg&imgrefurl=https%3A%2F%2Fwww.paperpapers.com%2Fplike-plastic-like-paper-8-5-x-11-white-122lb-cover-25-pk-dfs.html&docid=tNAVkgti-AxTLM&tbnid=8vjTplkc9ZOM0M&vet=12ahUKEwjz6eqMxN6FAxXoF1kFHVLJAIsQM3oECBUQAA..i&w=1200&h=1200&hcb=2&ved=2ahUKEwjz6eqMxN6FAxXoF1kFHVLJAIsQM3oECBUQAA'
  }
}

function App() {

  const [userSelect, setUserSelect] = useState(null)

  const play = (userChoice)=>{
    setUserSelect(choice[userChoice])
  } 

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect}/>
        <Box title="Computer"/>
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
