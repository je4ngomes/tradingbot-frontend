import React from 'react';
import {
    Container,
    Row,
    Col
} from 'react-materialize';

import img from '../assets/img/loginWallpaper.png';
import Login from '../components/Login';


const LoginPage = () => {
    return (
        <div className="cover" style={{ backgroundImage: `url("${img}")` }}>
            <Container>
                <Row>
                    <Col s={10} m={4} offset='s1 m4'>
                        <Login />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginPage
