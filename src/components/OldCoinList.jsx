// import React, { useState, useEffect, useContext } from 'react'
// import coingecko from '../apis/coingecko';
// import { WatchListContext } from '../context/watchlistContext'
// import Coin from './coin'
// import UserService from "../services/UserService";

// const CoinList = () => {
//     let UsersArr = [];
//         // Get all current users and render the coins in their portfolio 

//         let AllUsers = UserService.getAll()
//         .then((res) => {
//             console.log(res.data)
//             res.data.push(UsersArr);
//             return UsersArr
//         });

//         console.log("===================++++++++++++++All USERS ", AllUsers, "          ----", UsersArr);

//     const [coins, setCoins] = useState([]);
//     const { watchList, deleteCoin } = useContext(WatchListContext);
//     const [isLoading, setIsLoading] = useState(false);
//     console.log("WATCHLIST ---", watchList);

//     useEffect(() => {
//     const fetchData = async () => {
//         setIsLoading(true);
//         const response = await coingecko.get("/coins/markets/", {
//         params: {
//             vs_currency: "usd",
//             ids: watchList.join(","),
//         },
//         });
//         // console.log("WATCHLIST 8888888888888888888---", response.data);
//         setCoins(response.data);
//         setIsLoading(false);
        
//     };

//     console.log("TEST coins ", coins)
//     if (watchList.length > 0) {
//         fetchData();
//     } else setCoins([]);
//     }, [watchList]);


//     const renderCoins = () => {
//     if (isLoading) {
//         return <div>Loading...</div>;
//     }


//     return (
//         <ul className="coinlist list-group mt-2">
//         {coins.map((coin) => {
//             return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin} />;
//         })}
//         </ul>
//     );
//     };


//     return <div>{renderCoins()}</div>;
// };

// export default CoinList;
