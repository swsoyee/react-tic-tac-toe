import * as React from 'react';
import { Box, Button } from '@material-ui/core';

import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CloseIcon from '@material-ui/icons/Close';

const Square: React.FC<{
    onClick: () => void,
    value: string,
}> = (props) => {
    const { onClick, value } = props;
    let symbol;
    if (value) {
        if (value === 'O') {
            symbol = <RadioButtonUncheckedIcon />;
        } else if (value === 'X') {
            symbol = <CloseIcon />;
        } else {
            symbol = value;
        }
    } else {
        symbol = '　';
    }

    return (
        <Box component="span" m={0}>
            <Button
                variant="outlined"
                onClick={onClick}
            >
                {symbol}
            </Button>
        </Box>
    );
};

export default Square;
