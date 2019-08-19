import React, { forwardRef } from 'react';
import Inline from './Inline';

const InlineInput = ({ type='text', error, innerRef, ...props }) => {
    return (
        <Inline>
            <input className='inputField' type={type} ref={innerRef} {...props} />
            <label></label>
            <span className="helper-text" data-error={error}></span>
        </Inline>
    );
};

export default forwardRef((props, ref) => <InlineInput {...props} innerRef={ref} />);