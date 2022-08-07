const DiceA=({handleClick , disable ,scoreP1 })=>{
    return(
        <div>
            <h2 data-testid="dice-A-value">Dice A: {scoreP1}</h2>
            <button data-testid="dice-A-button" disabled={disable} onClick={handleClick} >Player 1: Roll Dice</button>
        </div>
    )
}

export default DiceA;