import DiceB from "./DiceB";
import DiceA from "./DiceA";
import { useState } from "react";
const Game=()=>{

    const [score1 , setScore1]=useState(0)
    const [score , setScore]=useState(0)
    const [plClick , setClick]=useState(false)
    const [totalp1 , setTotalp1]=useState(0)
    const [total , setTotal]=useState(0)

const handleClick=(type)=>{

if (type==="playar1" ) {
    setClick(true)
    setScore1(Math.floor(Math.random()*6)+1) 
    setTotalp1(score1+totalp1)
}
else if(type ==="playar2")
{
    setClick(false)
    setScore(Math.floor(Math.random()*6)+1)
    setTotal(score+total)
}
}



    return (
        <div>
            <h1 data-testid="turn-heading">{plClick}</h1>
            <DiceA scoreP1={score1} disable={plClick}  handleClick={()=>handleClick("playar1")} />
            <DiceB scoreP2={score} disable={!plClick} handleClick={()=>handleClick("playar2")} />
            <h3 data-testid="player1-score">Player 1 Scores: {totalp1}</h3>
            <h3 data-testid="player2-score">Player 2 Scores: {total}</h3>
            <h1 data-testid="result-tag">result{/* Result tag should be here */}</h1>
        </div>
    )
}

export default Game;