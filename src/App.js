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
    setMyDiceValue(randNum())
    setOtherDiceValue(randNum())

    setMyDiceHistory([...myDiceHistory,myDiceValue])
    setOtherDiceHistory([...otherDiceHistory,otherDiceValue])

    setMyDiceTotalScore(myDiceTotalScore + myDiceValue)
    setOtherDiceTotalScore(otherDiceTotalScore + otherDiceValue)
  }

  const handlerClearDice = (e) => {

  }

  return (
    <div className="App">
      <button onClick={handlerDiceClick}>던지기</button>
      <button onClick={handlerClearDice}>초기화</button>
      <div className = "BoardDiv">
          나
          <Board value ='blue' num = {myDiceValue}/>
          <div>기록:{myDiceHistory.join(", ")}</div>
          <div>총점:{myDiceTotalScore}</div>
      </div>
       <div className = "BoardDiv">
          상대
          <Board value = 'red' num = {otherDiceValue}/>
          <div>기록:{otherDiceHistory.join(", ")}</div>
          <div>총점:{otherDiceTotalScore}</div>
      </div>
  </div>
  );
}

/*
            나
          <Board value ='blue' num = {myDiceValue}/>
          <div>기록:{myDiceHistory.join(", ")}</div>
          <div>총점:{myDiceTotalScore}</div>
            상대
          <Board value = 'red' num = {otherDiceValue}/>
          <div>기록:{otherDiceHistory.join(", ")}</div>
          <div>총점:{otherDiceTotalScore}</div>
*/

export default App;
