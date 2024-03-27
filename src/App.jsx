import { useState } from 'react'
import { Board } from './components/Board'
import { TURNS } from './constants'
import { Square } from './components/Square'
import { checkWinner, checkEndGame} from './logic/board'
import { WinnerModal } from './components/WinnerModal'


function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const resetGame = () =>
  {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const updateBoard = (index) =>
  {
    if(board[index] || winner) return

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newWinner = checkWinner(newBoard)
    if(newWinner)
    {
      setWinner(newWinner)
    }
    else if(checkEndGame(newBoard))
    {
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>Tres en raya</h1>

      <button onClick={resetGame}>Reset</button>

      <Board board={board} updateBoard={updateBoard}/>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App
