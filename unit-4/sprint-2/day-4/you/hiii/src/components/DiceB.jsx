const DiceB=({handleClick , disable , scoreP2} )=>{
    return(
        <div>
            <h2 data-testid="dice-B-value">Dice B: {scoreP2}</h2>
            <button data-testid="dice-B-button"disabled={disable} onClick={handleClick} >Player 2: Roll Dice</button>
        </div>
    )
}

export default DiceB;