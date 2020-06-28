import { useCallback, useState } from 'react';
import { calculateWinner } from './module';

const useGame = () => {
    const [history, setHistory] = useState([{
        squares: Array(9).fill(null),
    }]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = useCallback((i) => {
        const historyExist = history.slice(0, stepNumber + 1);
        const current = historyExist[historyExist.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory(
            historyExist.concat([{
                squares,
            }]),
        );
        setStepNumber(historyExist.length);
        setXIsNext(!xIsNext);
    }, [xIsNext, history, stepNumber]);

    const jumpTo = useCallback((step) => {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    }, []);

    return {
        history,
        stepNumber,
        xIsNext,
        handleClick,
        jumpTo,
    };
};

export default useGame;
