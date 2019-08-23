import React, { useState } from 'react';
import { Row, Col, Button, Icon } from 'react-materialize';
import { makeStyles } from '@material-ui/styles';

import InlineInput from '../forms/InlineInput';
import InlineSelect from '../forms/InlineSelect';
import PreviewPrice from '../PreviewPrice';
import { percentToCurrency, getProfit } from '../../utils/utils';
import useFetchCurrencyPrice from '../../hooks/useFetchCurrencyPrice';
import btcIcon from '../../assets/svg/btc.svg';
import ethIcon from '../../assets/svg/eth.svg';
import bchIcon from '../../assets/svg/bch.svg';
import ltcIcon from '../../assets/svg/ltc.svg';
import xrpIcon from '../../assets/svg/xrp.svg';

const useStyles = makeStyles({
    span: {
        fontSize: '16pt',
        color: '#fff'
    },
    icon: {
        position: 'relative',
        top: 5
    },
    row: {
        marginTop: 0,
        marginBottom: 0
    }
});

const coins = {
    btc: btcIcon,
    bch: bchIcon,
    eth: ethIcon,
    ltc: ltcIcon,
    xrp: xrpIcon
};
const isFloat = n => /-?[0-9]{1,3}(\.[0-9]{1,2})?/.test(n);

const BotControlForm = ({ handleStart, handleStop }) => {
    const classes = useStyles();
    const [_, prices] = useFetchCurrencyPrice(20000);
    const [selectIcon, setSelectIcon] = useState(coins.btc);
    const [fields, setFields] = useState({
        buyLow: 0.0,
        sellHigh: 0.0,
        currency: 'btc',
        profit: 1.0,
        qty: 0.0
    });

    const handleSelectClick = ({ target: { value } }) => {
        setSelectIcon(coins[value]);
        setFields({ ...fields, currency: value });
    };
    const handleChange = ({ target: { name, value, type } }) => {
        const v = type === 'number' ? ( isFloat(value) ? value : fields[name] ) : value;
        console.log(value)
        setFields({ ...fields, [name]: v });
    };
    
    return (
        <form>
            <Row className={classes.row}>
                <Col m={6}>
                    <span className={classes.span}>Compra em baixa de %: </span>
                    <InlineInput 
                        type='number' 
                        min='-100'
                        step='0.1'
                        max='100'
                        onChange={handleChange}
                        value={fields.buyLow} 
                        style={{ width: 70, color: '#fff' }} 
                        name='buyLow' />
                </Col>
                <Col m={5}>
                    <span className={classes.span}>Venda em alta de %: </span>
                    <InlineInput 
                        type='number' 
                        min='-100'
                        step='0.1'
                        max='100'
                        onChange={handleChange}
                        value={fields.sellHigh} 
                        style={{ width: 70, color: '#fff' }} 
                        name='sellHigh' />
                </Col>
            </Row>
            <Row className={classes.row}>
                <Col m={5}>
                    <span className={classes.icon}><img src={selectIcon} alt=''/></span>
                    <InlineSelect onChange={handleSelectClick} name='currency'>
                        <option value="btc">Bitcoin</option>
                        <option value="bch">Bitcoin Cash</option>
                        <option value="eth">Ethereum</option>
                        <option value="ltc">Litecoin</option>
                        <option value="xrp">Ripple</option>
                    </InlineSelect>
                </Col>
                <Col m={6}>
                    <span className={classes.span}>Qty %: </span>
                    <InlineInput 
                        type='number' 
                        min='0'
                        step='0.001'
                        max='100'
                        onChange={handleChange}
                        value={fields.qty} 
                        style={{ width: 70, color: '#fff' }} 
                        name='qty' />
                    <PreviewPrice 
                        value={percentToCurrency(fields.qty, prices[fields.currency])} />
                </Col>                
            </Row>
            <Row className={classes.row}>
                <Col s={12}>
                    <span className={classes.span}>Limite venda com rentabilidade %: </span>
                    <InlineInput 
                        type='number' 
                        min='0'
                        step='0.001'
                        max='100'
                        onChange={handleChange}
                        value={fields.profit} 
                        style={{ width: 70, color: '#fff' }} 
                        name='profit' />
                    <PreviewPrice 
                        labelColor='#00e676' 
                        value={getProfit(fields.profit, prices[fields.currency])} />
                </Col>                
            </Row>
            <Row>
                <Col m={6} l={6} offset='m4 l3 s1'>
                    <Button 
                        className='green' 
                        onClick={handleStart(fields)} 
                        waves="light" 
                        style={{ marginRight: 5 }}
                    >
                        Iniciar
                        <Icon right>play_circle_outline</Icon>
                    </Button>
                    <Button 
                        className='red lighten-1' 
                        onClick={handleStop} 
                        waves="light"
                    >
                        Parar
                        <Icon right>pause_circle_outline</Icon>
                    </Button>
                </Col>
            </Row>
        </form>
    )
}

export default BotControlForm;
