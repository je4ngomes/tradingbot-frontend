import React from 'react';
import { makeStyles } from '@material-ui/styles';

import Spinner from '../shared/Spinner';

const useStyles = makeStyles({
    div: { 
        float: 'left', 
        marginLeft: 5, 
        cursor: 'pointer' 
    },
    svgSpan: { 
        position: 'relative', 
        top: 5
    },
    priceSpan: (props) => ({
        color: props.color
    })
});

const Currency = ({ svg, price, title, color='#fff', isLoading }) => {
    const classes = useStyles({ color });

    const renderPrice = () => (
        <span className={classes.priceSpan}>R$ {parseFloat(price).toFixed(2)}</span> 
    );

    const renderSpinner = () => (
        <Spinner fill={color} />
    );
    
    return (
        <div title={title} className={classes.div}>
            <span className={classes.svgSpan}>
                <img src={svg} alt=""/> 
            </span>{" "}
            {isLoading ? renderSpinner() : renderPrice()}
        </div>
    );
};

export default Currency;
