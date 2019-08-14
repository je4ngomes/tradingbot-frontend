import React from 'react';
import {
    Container,
    Row,
    Col
} from 'react-materialize';


import './assets/css/App.css';
import Login from './components/Login/index';
import img from './assets/img/loginWallpaper.png';

function App() {
  return (
    <div className="App cover" style={{ backgroundImage: `url("${img}")` }}>
        <Container>
            <Row>
                <Col s={10} m={4} offset='s1 m4'>
                    <Login />
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
