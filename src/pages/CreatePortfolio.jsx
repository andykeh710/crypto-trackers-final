import React from "react";
import AddCoin from "../components/AddCoin";
import UserCoinList from "../components/UserCoinList";
// import BuildPortfolio from "../components/BuildPortfolio";
/// This is where we will create portfolios and push them to the db 
// created portfolios only accessable by user to edit. 
// nice-to-have time feature to lock in how well they have done over time 

const CreatePortfolio = (props) => {

    console.log("FROGGY 72--------------------------------------------------------",  props.loggedUser)


return (
    <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
    <AddCoin />
    {/* {props.loggedUser} */}
    <UserCoinList loggedUser={props.loggedUser}/>

    </div>
);
};


export default CreatePortfolio;
