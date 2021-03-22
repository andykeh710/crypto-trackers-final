// import React from 'react'
import { useState, useEffect } from 'react'
import coingecko from '../apis/coingecko';
// import { WatchListContext } from '../context/watchlistContext'
// import Coin from './coin'
// import UserService from "../services/UserService";
import Coin from './coin'

function RenderUserCoins(coinArr) {
    
    var coinArr1 = ["bitcoin", "polkadot"]
    console.log("RENDERED USER COIN ARR FROM USER COINS  -==", coinArr1)
    const [coins, setCoins] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    const fetchData = async () => {
        // setIsLoading(true);
        const response = await coingecko.get("/coins/markets/", {
        params: {
            vs_currency: "usd",
            ids: coinArr1.join(","), // join coins here 
        }
        });
            setCoins(response.data);// data we pass to be rendered 
        // setIsLoading(false);
    };
        fetchData(); // run function 
    }, []);
    // if (watchList.length > 0) {
    //     fetchData();
    // } else setCoins([]);
    // }, [watchList]);

        console.log("COINS from RENDER USER COINS----------------------", coins)
    return (
        <ul>
        {coins.map((coin) => {
            <Coin key={coin.id} coin={coin} />;
        })}
        </ul>
    )

}

export default RenderUserCoins
