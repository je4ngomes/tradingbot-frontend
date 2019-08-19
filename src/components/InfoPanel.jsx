import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Row, Col } from 'react-materialize';

import btcIcon from '../assets/svg/btc.svg';
import ethIcon from '../assets/svg/eth.svg';
import bchIcon from '../assets/svg/bch.svg';
import ltcIcon from '../assets/svg/ltc.svg';
import xrpIcon from '../assets/svg/xrp.svg';
import Pane from './layout/Pane';
import CryptoCurrency from './CryptoCurrency';

const useStyles = makeStyles({
    span: {
        fontSize: '13pt',
        color: '#ffa726'
    }
});

const currencies ={
    btc: { svg: btcIcon,  color: '#F5B300', title: 'Bitcoin' },
    bch: { svg: bchIcon,  color: '#7CB342', title: 'Bitcoin Cash' },
    eth: { svg: ethIcon, color: '#86A6BD', title: 'Ethereum' },
    ltc: { svg: ltcIcon, color: '#D4D4D4', title: 'Litecoin' },
    xrp: { svg: xrpIcon, color: '#28A1DB', title: 'Ripple' }
};

const InfoPanel = () => {
    const classes = useStyles();

    return (
        <Pane bg='#304454' padding='20px'>
            <Row>
                <Col>
                    <span className={classes.span}>Cotações</span>
                    <CryptoCurrency currencies={currencies} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <span className={classes.span}>Saldo Carteira</span>
                </Col>
            </Row>            
        </Pane>
    )
}

export default InfoPanel;
