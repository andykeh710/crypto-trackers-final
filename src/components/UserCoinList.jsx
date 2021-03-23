import React, { useState, useEffect } from 'react'
import coingecko from '../apis/coingecko';
// import { WatchListContext } from '../context/watchlistContext'
import Coin from './coin'
import UserService from "../services/UserService";
//import IsLoggedIn from "./IsLoggedIn"
var coinArr1 = [];
var userEmailArr = [];
var coinArray = [];
var userIndex; 

const UserCoinList = (props) => {
    

    let curLoggedUser= props.curLoggedUser;
    UserService.getAll()
    .then((res) => {

        let allUsers  = res.data;
        for (let i=0; i< allUsers.length; i++){
            userEmailArr.push(allUsers[i].email);
            coinArray.push(allUsers[i].coins)
        }
        console.log("USER EMAIL ARR=====-=---------------------------", userEmailArr, coinArray)
         // gets most recent user 
        userIndex = userEmailArr.indexOf(props.loggedUser);
        // let curentID = res.data[currentUser]._id;  // current user ID 
        // coinArr = res.data[currentUser].coins; 
        // return coinArr
        coinArr1 = coinArray[userIndex];
        var coinArr = coinArr1; 


        
    }).then((res) => {
        
    })
    
    
    console.log("COIN ARRAY FINAL ------------", coinArr)
    const [coins, setCoins] = useState([]);
    // const { watchList, deleteCoin } = useContext(WatchListContext);
    const [isLoading, setIsLoading] = useState(false);
    //console.log(coinArr);


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
