import React from 'react';
import PropTypes from 'prop-types';

import { Paper, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    paperRoot: props => ({
        background: props.bg,
        padding: props.padding
    }),
    titleRoot: props => ({
        fontSize: props.titleSize,
        color: props.titleColor
    })
});

const PaneContainer = ({ 
    title, 
    children,
    titleSize = '16pt', 
    titleColor = '#b39ddb',
    padding = '10px', 
    textAlign = 'center', 
    bg = '#232a33'
}) => {
    const classes = useStyles({ titleSize, titleColor, padding, bg });
    
    return (
        <Paper elevation={2} className={classes.paperRoot}>
            {title && (
                <Typography component="div">
                    <Box 
                        textAlign={textAlign}
                        className={classes.titleRoot} 
                    >
                        {title}
                    </Box>
                </Typography>
            )}
            <div>
                {children}
            </div> 
        </Paper>
    );
};

PaneContainer.propTypes = {
    title: PropTypes.string,
    titleSize: PropTypes.string,
    titleColor: PropTypes.string,
    textAlign: PropTypes.string,
    padding: PropTypes.string,
    bg: PropTypes.string
}


export default PaneContainer;
