import React from 'react';
import { makeStyles } from '@material-ui/styles';

import LoginForm from './LoginForm';
import Pane from '../layout/Pane';

const useStyles = makeStyles({
    h4: {
        textAlign: 'center',
        color: '#ff9800'
    }
});

export default () => {
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Pane bg='#304454'>
            <div>
                <h3 className={classes.h4}>Login</h3>
            </div>
            <div>
                <LoginForm onSubmit={handleSubmit} />           
            </div>
        </Pane>
    );
};
