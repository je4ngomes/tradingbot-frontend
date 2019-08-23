
import React, { useEffect, useRef } from 'react';
import M from 'materialize-css';
import Inline from './Inline';


const InlineSelect = ({ children, ...props }) => {
    const selectRef = useRef();

    useEffect(() => {
        const instance = M.FormSelect.init(selectRef.current);

        return () => instance.destroy();
    }, []);

    return (
        <Inline>
            <select ref={selectRef} {...props}>
                {children}
            </select>
        </Inline>
    );
};

export default InlineSelect;