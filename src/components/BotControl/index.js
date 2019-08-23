import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Row, Col, Container } from 'react-materialize';

import BotControlForm from './BotControlForm';
import Pane from '../layout/Pane';

const useStyles = makeStyles({
    title: {
        color: '#ffb74d',
        fontSize: '24pt',
        marginTop: '20px !important'
    }
});

export default () => {
    const classes = useStyles();

    return (
        <Pane 
            title='Painel de Controle' 
            titleColor='#ffb74d' 
            textAlign='left' 
            bg='#304454' >
            <Row style={{ marginLeft: 5 }}>
                <Col s={12}>
                    <Container style={{ textAlign: 'center' }}>
                        <BotControlForm 
                            handleStart={(fields) => e => console.log(fields)} 
                            handleStop={() => null} />
                    </Container>
                </Col>
            </Row>
        </Pane>
    );
};
