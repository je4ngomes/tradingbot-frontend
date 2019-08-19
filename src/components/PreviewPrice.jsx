import React from 'react'

const PreviewPrice = ({ labelColor='#00b0ff', value }) => {
    return (
        <span style={{ fontSize: '16pt', color: labelColor, marginLeft: 15 }}>
            R$ {value.toFixed(2)}
        </span>
    );
};

export default PreviewPrice;
