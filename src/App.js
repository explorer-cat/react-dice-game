import React from 'react';
import logo from './logo.svg';
import Board from './Dice';
import './App.css';

import utils from './utils'
import { randNum } from './utils';


function App() {

  const [myDiceValue, setMyDiceValue] = React.useState(1);
  const [otherDiceValue, setOtherDiceValue] = React.useState(1);

  const [myDiceHistory, setMyDiceHistory] = React.useState([]);
  const [otherDiceHistory, setOtherDiceHistory] = React.useState([]);

  const [myDiceTotalScore , setMyDiceTotalScore] = React.useState(0); 
  const [otherDiceTotalScore , setOtherDiceTotalScore] = React.useState(0); 


  const handlerDiceClick = (e) => {
    let myDice = randNum();
    let oterDice = randNum();
    setMyDiceValue(myDice)
    setOtherDiceValue(oterDice)

    setMyDiceHistory([...myDiceHistory,myDice])
    setOtherDiceHistory([...otherDiceHistory,oterDice])

    setMyDiceTotalScore(myDiceTotalScore + myDice)
    setOtherDiceTotalScore(otherDiceTotalScore + oterDice)
  }

  const handlerClearDice = (e) => {
    setMyDiceValue(1)
    setOtherDiceValue(1)
    setMyDiceHistory([])
    setOtherDiceHistory([])
    setMyDiceTotalScore(0)
    setOtherDiceTotalScore(0)
  }

  return (
    <div className="App">
      <button onClick={handlerDiceClick}>던지기</button>
      <button onClick={handlerClearDice}>초기화</button>

      <div className = "Board">
        <div className = "BoardDiv">
            <div className = "white">나</div>
            <Board value ='blue' num = {myDiceValue}/>
            <div className = "gray">기록</div>
            <div className = "white">{myDiceHistory.join(", ")}</div>
            <div className = "gray">총점</div>
            <div className = "white">{myDiceTotalScore}</div>
        </div>
        <div className = "BoardDiv">
        <div className = "white">상대</div>
            <Board value = 'red' num = {otherDiceValue}/>
            <div className = "gray">기록</div>
            <div className = "white">{otherDiceHistory.join(", ")}</div>
            <div className = "gray">총점</div>
            <div className = "white">{otherDiceTotalScore}</div>
        </div>
      </div>
  </div>
  );
}
 
export default App;
