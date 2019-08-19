import React from 'react';
import { Table } from 'react-materialize';


const labelOp = (op, bg) => {
    return (
        <span 
            style={{ padding: '3px 8px', backgroundColor: bg, color: '#fff' }}
            className='z-depth-1'
        >
            {op.toUpperCase()}
        </span>
    );
};

const labelColor = op => (
    ({ 
        compra: '#00c853', 
        venda: '#f44336',
        info: '#2196f3',
        error: '#000'
    })[op.toLowerCase()] || '#ffab91'
);

const DataTable = ({ rows }) => {

    const renderRow = ({ msg, qty, limit, op }) => (
        <tr>
            <td style={{ color: labelColor(op) }}>{msg}</td>
            <td>{qty}</td>
            <td>{limit}</td>
            <td>{labelOp(op, labelColor(op))}</td>
        </tr>
    );

    return (
        <Table 
            style={{ borderRadius: 3, marginTop: 10 }} 
            className='deep-purple-text text-lighten-4 z-depth-1 responsive-table'>
            <thead>
                <tr>
                    <th>Messagem</th>
                    <th>Qty</th>
                    <th>Limite</th>
                    <th>Operação</th>
                </tr>
            </thead>
            <tbody>
                {rows.map(renderRow)}
            </tbody>
        </Table>
    );
};

export default DataTable;