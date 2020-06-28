import * as React from 'react';
import { Box, Button } from '@material-ui/core';

const Square: React.FC<{
    onClick: () => void,
    value: string,
}> = (props) => {
    const { onClick, value } = props;
    return (
        <Box component="span" m={0}>
            <Button
                variant="outlined"
                onClick={onClick}
            >
                {value || '　'}
            </Button>
        </Box>
    );
};

export default Square;
