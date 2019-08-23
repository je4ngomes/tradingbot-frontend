import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-materialize';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#304454',
        '& div.nav-wrapper': {
            width: '94%',
            margin: '0 auto'
        }
    },
    div: {
        marginRight: 10
    },
    brand: {
        color: '#ffb74d !important'
    }
});

const Header = () => {
    const classes = useStyles();

    return (
        <Navbar 
            brand={<Link className={classes.brand} to='/dashboard'>TradingBot</Link>} 
            className={classes.root} 
            alignLinks='right'
        >
            <div>
                <Link to='/dashboard/orders'>
                    Ordens
                </Link>
            </div>
            <div>
                <a>Sair</a>
            </div>
        </Navbar>
    );
};

export default Header
