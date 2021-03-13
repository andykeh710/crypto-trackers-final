import React, { useState, useEffect, useContext } from 'react'

import { createContext } from 'react';


export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
    const [watchList, setWatchList] = useState(["bitcoin", "ethereum", "polkadot"]) /// when user logs in there will be no coins if passin in empty arr 
        // abpve is hardcoded default coins to show users with no coins. we need to add logic to allow for show/hide for users who are logged in with previous selections 
    return (
        <WatchListContext.Provider value = {{ watchList }}>
            {props.children}
        </WatchListContext.Provider>
    );
};

