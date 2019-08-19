import React from 'react'
import Currency from './Currency';

const CurrencyCollection = ({ isLoading, prices, currencies }) => (
        <div>
            {Object.entries(currencies).map(
                ([coin, props], i) => (
                    <Currency isLoading={isLoading} key={i} {...props} price={prices[coin]} />
            ))}
        </div>
);

export default CurrencyCollection;
