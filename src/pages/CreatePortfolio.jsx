import React from "react";
import AddCoin from "../components/AddCoin";
import CoinList from "../components/CoinList";
import BuildPortfolio from "../components/BuildPortfolio";
/// This is where we will create portfolios and push them to the db 
// created portfolios only accessable by user to edit. 
// nice-to-have time feature to lock in how well they have done over time 

const CreatePortfolio = () => {
return (
    <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
    <AddCoin />
    <BuildPortfolio />
    <CoinList />
    </div>
);
};


export default CreatePortfolio;
