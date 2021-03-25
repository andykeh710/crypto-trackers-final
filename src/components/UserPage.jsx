import coingecko from '../apis/coingecko';
import Coin from './coin'
import React, { useState, useEffect } from 'react'

// single page that has a single user and the coins associated  
const UserPage = ({coin, user}) => {
    const [coins, setCoins] = useState([]);
    var tempCoins= coin; 

    useEffect(() => {
        if(tempCoins.length > 1){
        const fetchData = async () => {

            const response = await coingecko.get("/coins/markets/", {
            params: {
                vs_currency: "usd",
                ids: tempCoins.join(","),
            },
            });
            setCoins(response.data);

            
        };
            fetchData();
    } else {
    }}, [tempCoins]);
    




    return (
        <div  className="coinsummary shadow border p-2 rounded mt-2 bg-light profileBasket"> 
            
            <h1>{user}</h1>
            <br></br>
        <ul className="coinlist list-group mt-2">
        {coins.map((coin) => {
            return<Coin key={coin.id} coin={coin} />;
        })}
        </ul>
 
        </div>
    ) 


    // return <div>{renderCoins()}</div>;
}

export default UserPage





