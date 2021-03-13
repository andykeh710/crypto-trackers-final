import React, { useState, useEffect } from 'react'
import coingecko from '../apis/coingecko';
import coinGecko from '../apis/coingecko'


const CoinList = () => {
    const [coins, setCoins] = useState([])
 
    useEffect(() => {
        const fetchData = async () => {
           const response = await coingecko.get("/coins/markets", {
            params: {
                vs_currency: "usd",
                ids: "bitcoin,ethereum"
            }
        })
        console.log(response.data)

        } // this adds on to the api route as defined in apis/coingecko for fetch req for coins

        fetchData();
    }, []); // only fetch one time adding empty arr 
    return (
        <div>
            
        </div>
    )
}

export default CoinList
