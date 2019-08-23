import React from 'react';

const Inline = ({ children: inputElem }) => (
    <div style={{ marginTop: 0, marginBottom: 0 }} className="input-field inline">
        {inputElem}
    </div>
);

export default Inline;