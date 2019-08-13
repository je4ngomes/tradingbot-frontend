import React from 'react';
import { Row, Col } from 'react-materialize';
import { Container, Grid } from '@material-ui/core';

import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
        <Container>
            <Grid container justify='center'>
                <Grid item xs={12} sm={8} md={4}>
                    <Login />
                </Grid>
            </Grid>
        </Container>
    </div>
  );
}

export default App;
