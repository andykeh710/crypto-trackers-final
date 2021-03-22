    import React, { useState, useEffect } from 'react'
    // import RenderUserCoins from './RenderUserCoins';
    // import { WatchListContext } from '../context/watchlistContext'
    import Coin from './coin'
    import coingecko from '../apis/coingecko';
    import UserService from "../services/UserService";

    const UserPortfolios = () => {
        const [coins, setCoins] = useState([]);
        const [users, setUsers] = useState([]);

        useEffect(() => {
            retrieveUsers();
        }, []);
        
    const retrieveUsers = () => {
        UserService.getAll()
        .then(response => {
            setUsers(response.data);
            console.log("RESPONSE > DDATA ", response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };
            // UserService.getAll()
            // .then((res) => {
            // console.log("PEANUT-------------------", res.data)
            //         UsersArr.push(res.data)
            //         UserCoinArr.push(res.data[1].coins)
            //         // we want to pull out the user and their coin arrays to display below 
            //         // user arr / coin arr = matchin index numbers 
            //         // users have a portfolio of coins 
            //         // coins come in an array. users are in an array that have the coins array. we need to get into the user array and then the coin array 
                
            // });
            var coinArr1 = ["bitcoin", "polkadot"]
            console.log("RENDERED USER COIN ARR FROM USER COINS  -==", coinArr1)
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

            //console.log("USE COIN ARRAY***************", coins)
            // for (let k=0; k< UserCoinArr.length; k++){
            //     console.log("USE LOOP FOR --", UserCoinArr[k])
            // }
                // USER ARR = arr of users that includes coins that they have 

        
        // for each user use the coins map logic 
        // get array of users 
        // have user email and coin array accessable 
        // access below to print dynamically 
        return (
                
        <ul className="coinlist list-group mt-2">
            <h1>Teest</h1>
            {coins.map((coin) => {
                <Coin key={coin.id} coin={coin} />;
            })}
        </ul>
            
        );
        //};

    
        // return <div>{renderCoins()}</div>;
    };
    
    export default UserPortfolios;
