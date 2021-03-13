import React, { useState, useEffect, useContext } from 'react'
import coingecko from '../apis/coingecko';
import { WatchListContext } from '../context/watchlistContext'
import Coin from './coin'

const CoinList = () => {
    const [coins, setCoins] = useState([])
    const { watchList } = useContext(WatchListContext)
    const [isLoading, setIsLoading] = useState(false)
    console.log(watchList);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true) 
           const response = await coingecko.get("/coins/markets", {
            params: {
                vs_currency: "usd",
                ids: watchList.join(','),
            }
        });
        setCoins(response.data)  // saving state 
        setIsLoading(false) 

        } // this adds on to the api route as defined in apis/coingecko for fetch req for coins
        fetchData();
    }, []); // only fetch one time adding empty arr 

    const renderCoins = () => {
        return <div>...loading</div>
    }

    return (
        <ul className="coinlist list-group mt-2">
            {coins.map(coin => {
                return <Coin key={coin.id} coin={coin} />
            })}

        </ul>
    )


    return (
        <div>{renderCoins()}</div>


    )
}

export default CoinList
