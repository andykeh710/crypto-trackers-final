import React, { useState } from 'react'
import { createContext } from 'react';


export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
    const [watchList, setWatchList] = useState(["bitcoin", "ethereum", "polkadot", "cardano"]) /// when user logs in there will be no coins if passin in empty arr 
        // abpve is hardcoded default coins to show users with no coins. we need to add logic to allow for show/hide for users who are logged in with previous selections 
    
    const addCoin = coin => {
        if (watchList.indexOf(coin) === -1) {  // watchlist is an array, we check to see if index exists in array. if not = -1 and then will be added 
            setWatchList([...watchList, coin]) // make copy of arr + new coin
        }
    }

    const deleteCoin = (coin) => {
        setWatchList(watchList.filter(el => {
            return el !== coin  // looking for specific coin to delete 
        }))
    }

        return (
        <WatchListContext.Provider value = {{ watchList, deleteCoin, addCoin }}>
            {props.children}
        </WatchListContext.Provider>
    );
};

