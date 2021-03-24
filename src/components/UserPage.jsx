import coingecko from '../apis/coingecko';
// import { Link } from 'react-router-dom'
import Coin from './coin'
// import UserService from "../services/UserService";
import React, { useState, useEffect } from 'react'



// single page that has a single user and the coins associated  
const UserPage = ({coin, user}) => {
    const [coins, setCoins] = useState([]);
    var tempCoins= coin; 
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        if(tempCoins.length > 1){
        const fetchData = async () => {
            setIsLoading(true);
            const response = await coingecko.get("/coins/markets/", {
            params: {
                vs_currency: "usd",
                ids: tempCoins.join(","),
            },
            });
            setCoins(response.data);
            setIsLoading(false);
            
        };
    
        console.log("TEST coins ", tempCoins)
            fetchData();
    } else {

    }
        }, []);
    


    return (
        <div className="text-decoration-none my-1 coin">
            <br></br>
            <h1>{user}</h1>
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





