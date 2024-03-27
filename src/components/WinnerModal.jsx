import { Square } from "./Square";

export function WinnerModal({ winner, resetGame })
{
    if(winner === null) return

    const winnerText = winner === false ? 'Empate' : 'Ganador es: '
    return(
        <section className="winner">
            <div className="text">
                <h2>{winnerText}</h2>

                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    )
}