import React, { useState, useEffect, useContext } from 'react'
import coingecko from '../apis/coingecko';
// import { WatchListContext } from '../context/watchlistContext'
import Coin from './coin'
import UserService from "../services/UserService";
var coinArr = [];

const UserCoinList = () => {

    UserService.getAll()
    .then((res) => {
        console.log(res.data)
        let currentUser = res.data.length -1; // gets most recent user 
        // let curentID = res.data[currentUser]._id;  // current user ID 
        coinArr = res.data[currentUser].coins; 
        return coinArr
    })



    const [coins, setCoins] = useState([]);
    // const { watchList, deleteCoin } = useContext(WatchListContext);
    const [isLoading, setIsLoading] = useState(false);
    console.log(coinArr);
    useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true);
        const response = await coingecko.get("/coins/markets/", {
        params: {
            vs_currency: "usd",
            ids: coinArr.join(","),
        },
        });
        setCoins(response.data);
        console.log("============================", response.data)
        setIsLoading(false);
    };

    if (coinArr.length > 0) {
        fetchData();
    } else;
    }, [coinArr]);

    const renderCoins = () => {
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <ul className="coinlist list-group mt-2">
        {coins.map((coin) => {
            return <Coin key={coin.id} coin={coin} /> ;  /// deleteCoin={deleteCoin} 
        })}
        </ul>
    );
    };

    return <div>{renderCoins()}</div>;
}

export default UserCoinList;
