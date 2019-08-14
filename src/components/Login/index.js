import React from 'react';
import { makeStyles } from '@material-ui/styles';

import LoginForm from './LoginForm';
import Paper from '../shared/Paper';

const useStyles = makeStyles({
    h4: {
        textAlign: 'center',
        color: '#ffb74d'
    }
});

export default () => {
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Paper depth={2} style={{ background: '#fff' }}>
            <div>
                <h3 className={classes.h4}>Login</h3>
            </div>
            <div>
                <LoginForm onSubmit={handleSubmit} />           
            </div>
        </Paper>
    );
};
