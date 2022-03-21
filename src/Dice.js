import React from 'react';
import './App.css';
import diceBlue1 from './assets/dice-blue-1.svg'
import diceBlue2 from './assets/dice-blue-2.svg'
import diceBlue3 from './assets/dice-blue-3.svg'
import diceBlue4 from './assets/dice-blue-4.svg'
import diceBlue5 from './assets/dice-blue-5.svg'
import diceBlue6 from './assets/dice-blue-6.svg'

import diceRed1 from './assets/dice-red-1.svg'
import diceRed2 from './assets/dice-red-2.svg'
import diceRed3 from './assets/dice-red-3.svg'
import diceRed4 from './assets/dice-red-4.svg'
import diceRed5 from './assets/dice-red-5.svg'
import diceRed6 from './assets/dice-red-6.svg'



const DiceBlueImg = {
  "1" : diceBlue1,
  "2" : diceBlue2,
  "3" : diceBlue3,
  "4" : diceBlue4,
  "5" : diceBlue5,
  "6" : diceBlue6,
}
const DiceRedImg = {
  "1" : diceRed1,
  "2" : diceRed2,
  "3" : diceRed3,
  "4" : diceRed4,
  "5" : diceRed5,
  "6" : diceRed6,
}



function Board(prop) {

  // let [scoreMyHistory, setScoreMyHistory] = React.useState([]);
  // let [scoreOtherHistory, setScoreOtherHistory] = React.useState([]);
  // console.log("초기화")
  // let setMyDiceScore = [];
  // let setOtherDiceScore = [];
  

  // if(prop.value === "red") {
  //   setMyDiceScore = [...setMyDiceScore + prop.num]
  //   console.log("setMyDiceScore",setMyDiceScore)
  // } else {
  //   setOtherDiceScore = [...setOtherDiceScore,prop.num]
  // }


  return (
    <div>
      <img src = {prop.value === "red" ?  DiceRedImg[prop.num] : DiceBlueImg[prop.num] }/>

    </div>
  );
}

export default Board;
