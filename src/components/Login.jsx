import React from 'react';
import {
    Grid,
    Typography,
    Paper,
    TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const Login = () => {

    return (
        <Paper style={{ padding: 20 }}>
            <Grid container direction="column" justify='center' alignItems='center'>
                <Grid item>
                    <Typography align='center' variant='h4'>
                        Entrar
                    </Typography>
                </Grid>
                <Grid item container md={10}>
                    <TextField 
                        label='Username'
                        fullWidth
                        margin='normal'/>
                </Grid>
                <Grid item container md={10}>
                    <TextField 
                        label='Password'
                        fullWidth
                        type='password'
                        margin='normal'/>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Login;