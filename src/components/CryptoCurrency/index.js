import React from 'react';

import CurrencyCollection from './CurrencyCollection';
import useFetchCurrencyPrice from '../../hooks/useFetchCurrencyPrice';

export default ({ currencies }) => {  
    const [loading, prices] = useFetchCurrencyPrice(20000);

    return (
        <CurrencyCollection isLoading={loading} prices={prices} currencies={currencies} />
    );
};


