import React from 'react';

import Pane from '../layout/Pane';
import DataTable from './DataTable';
import { Row, Col } from 'react-materialize';


export default () => {
    const rows = [
        { msg: 'Venda realizada com sucesso', qty: '0.0013', limit: 42500.41, op: 'venda' },
        { msg: 'Compra realizada com sucesso', qty: '0.0013', limit: 42500.41, op: 'compra' },
        { msg: 'Valor abaixo de 4%', qty: '--', limit: '--', op: 'info' },
        { msg: 'Error no banco de dados', qty: '--', limit: '--', op: 'error' },
    ];

    return (
        <Pane 
            title='Monitoramento' 
            titleColor='#ffb74d' 
            textAlign='left' 
            bg='#304454' >
            <Row style={{ marginLeft: 5 }}>
                <Col s={12}>
                    <DataTable 
                        rows={rows}/>
                </Col>
            </Row>
        </Pane>
    );
};