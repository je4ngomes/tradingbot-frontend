import React from 'react'
import Header from '../components/layout/Header';
import { Row, Col, Container } from 'react-materialize';
import BotControl from '../components/BotControl';
import MonitorLog from '../components/MonitorLog';
import InfoPanel from '../components/InfoPanel';

const DashboardPage = () => {
    return (
        <div>
            <Row>
                <Header/>
            </Row>
            <Container>
                <Row>
                    <Col s={12} m={12} l={8} style={{ marginBottom: 10 }}>
                        <BotControl />
                    </Col>
                    <Col s={12} m={12} l={4}>
                        <InfoPanel />
                    </Col>
                </Row>
                <Row>
                    <Col s={12}>
                        <MonitorLog />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default DashboardPage;
