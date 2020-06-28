import * as React from 'react';

import Button from '@material-ui/core/Button';

import useGame from './hook';
import Board from '../molecules/Board';

const Game = () => {
    const {
        history,
        handleClick,
        jumpTo,
        getStatus,
        selectedHistory,
    } = useGame();

    const moves = history.map((step, move:number) => {
        const desc = move ? `Go to move #${move} (${step.row}, ${step.column})` : 'Go to game start';
        return (
            <li key={move}>
                <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={() => jumpTo(move)}
                >
                    {
                        move === selectedHistory ? <b>{desc}</b> : desc
                    }
                </Button>
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
