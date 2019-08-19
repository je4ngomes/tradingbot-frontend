import { useEffect, useState } from 'react';
import axios from 'axios';

const api = coin => `https://www.mercadobitcoin.com.br/api/${coin}/ticker/`;

const useFetchCurrencyPrice = (msDelay=15000) => {
    const [isLoading, setLoading] = useState(true);
    const [currencies, setCurrencies] = useState({
        btc: 0,
        bch: 0,
        eth: 0,
        ltc: 0,
        xrp: 0
    });

    useEffect(() => {
        const fetchAllCurrenciesPrice = () => (
            Promise.all(Object.entries(currencies).map(([coin]) => {
                    setLoading(true);

                    return axios.get(api(coin))
                        .then(({ data: { ticker: { last } } }) => [coin, last]);
                    }
                ))
                .then(entries => {
                    setCurrencies(
                        entries.reduce(
                            (acc, [coin, price]) => ({ ...acc, [coin]: price }), 
                            {}
                        )
                    );
                    setLoading(false);

                })
                .catch(e => console.error(e))
        );

        fetchAllCurrenciesPrice();

        const id = setInterval(fetchAllCurrenciesPrice, msDelay);

        return () => clearInterval(id);
    }, []);
    
    
    
    return [isLoading, currencies];
};

export default useFetchCurrencyPrice;
