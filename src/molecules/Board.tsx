import * as React from 'react';

import Square from '../atoms/Square';
import { arrTrans } from '../module';

const Board: React.FC<{
    squares: string[],
    onClick: (i:number) => void,
}> = (props) => {
    const renderSquare = (i:number) => {
        const { squares, onClick } = props;
        return (
            <Square
                value={squares[i]}
                onClick={() => onClick(i)}
            />
        );
    };

    return (
        <div>
            {
                // @ts-ignore
                arrTrans(3, [...Array(9).keys()]).map((line:number[]) => (
                    <div className="board-row">
                        {line.map((i) => renderSquare(i))}
                    </div>
                ))
            }
        </div>
    );
};

export default Board;
