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
    function sleep(ms) {
        return new Promise(
          resolve => setTimeout(resolve, ms)
        );
      }

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
        const response = await coingecko.get("/coins/markets/", {
            params: {
                vs_currency: "usd",
                ids: userCoinList.join(","),
        },
        });
        setCoins(response.data);
        // console.log("============================", userCoinList)
        async function delayedGreeting() {
            await sleep(4000);
        setIsLoading(false)
        }
        delayedGreeting()
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
        return (
            <div className="centerStuff">
            <div className="blobs">
            <div className="blob-center"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </defs>
            </svg>
            </div>
        )
    }
    if (emptyPortfolio){
        return(            
        <div className="centerStuff">
        <div className="blobs">
        <div className="blob-center"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        </div>
        <h3> No Tokens in This Profile Yet</h3>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
            <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
            </filter>
        </defs>
        </svg>
        </div>
        )
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
