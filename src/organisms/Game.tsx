import * as React from 'react';

import useGame from './hook';
import Board from '../molecules/Board';

const Game = () => {
    const {
        history,
        handleClick,
        jumpTo,
        getStatus,
    } = useGame();

    const moves = history.map((step, move:number) => {
        const desc = move ? `Go to move #${move}` : 'Go to game start';
        return (
            <li key={move}>
                <button
                    type="button"
                    onClick={() => jumpTo(move)}
                >
                    {desc}
                </button>
            </li>
        );
    });

    const { current, status } = getStatus();
    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={(i:number) => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
};

export default Game;
