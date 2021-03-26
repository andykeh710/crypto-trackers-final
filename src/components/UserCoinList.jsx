import React, { useState, useEffect } from 'react'
import coingecko from '../apis/coingecko';
import Coin from './coin'
import UserService from "../services/UserService";


var coinArr = [];
var userEmailArr = [];
var coinArray = [];
var userIndex; 

const UserCoinList = (props) => {
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let [userCoinList, setuserCoinList] = useState([]);
    let [emptyPortfolio, setEmptyPortfolio] = useState(true)
    const [didMount, setDidMount] = useState(false); 
    console.log("PROPS -----------------", props.loggedUser)
    let loggedUser = props.loggedUser.email
    UserService.getAll()
    .then((res) => {
        let allUsers  = res.data;
        if (userEmailArr.length === 0){
        for (let i=0; i< allUsers.length; i++){
            userEmailArr.push(allUsers[i].email);
            coinArray.push(allUsers[i].coins)
        }
        }
        userIndex = userEmailArr.indexOf(props.loggedUser.email);
        console.log("USERINDEX ", userIndex)
        coinArr = coinArray[userIndex];
        setuserCoinList(coinArr)
    })

    useEffect(() => {
        setDidMount(true);
    const fetchData = async () => {
        setIsLoading(true);
        //console.log("USER COIN LIST BEFORE COINGECKO ------------------------******", userCoinList)
        const response = await coingecko.get("/coins/markets/", {
        params: {
            vs_currency: "usd",
            ids: userCoinList.join(","),
        },
        });
        setCoins(response.data);
        console.log("============================", userCoinList)
        setIsLoading(false)
    };
    if (userCoinList !== undefined && userCoinList.length > 0) {
        setEmptyPortfolio(false)
        fetchData();
    } else {
        setEmptyPortfolio(true)
    }
    return () => setDidMount(false);

}, [userCoinList, setCoins])

if(!didMount) {
    return null;
  }

    const renderCoins = () => {
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (emptyPortfolio && isLoading === false){
        return<div> No coins in this portfolio yet.</div>
    }

    return (
        <ul className="coinlist list-group mt-2 charts">
        {coins.map((coin) => {
            return <Coin key={coin.id} coin={coin} loggedUser={loggedUser} /> ;  /// deleteCoin={deleteCoin} 
        })}
        </ul>
    )};
    return <div>{renderCoins()}</div>;
}

export default UserCoinList;
