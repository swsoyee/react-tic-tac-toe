import React from 'react';

const Square: React.FC<{
    onClick: () => void,
    value: string,
}> = (props) => {
    const { onClick, value } = props;
    return (
        <button
            type="button"
            className="square"
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default Square;
