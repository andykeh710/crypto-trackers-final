import React from "react";
import AddCoin from "../components/AddCoin";
import AddNewPortfolio from "../components/AddNewPortfolio"
import UserCoinList from "../components/UserCoinList";
// import BuildPortfolio from "../components/BuildPortfolio";
/// This is where we will create portfolios and push them to the db 
// created portfolios only accessable by user to edit. 
// nice-to-have time feature to lock in how well they have done over time 

const CreatePortfolio = (props) => {

    console.log("FROGGY 72--------------------------------------------------------",  props)


return (
    <div className=" p-2 rounded profileBasket2">

        <h1 className="text-warning text-center">Hello {props.loggedUser.name}</h1>

        <AddCoin loggedUser={props.loggedUser}/>  <AddNewPortfolio className="rightSide addPortolio btn2 " />
    
        <UserCoinList loggedUser={props.loggedUser}/>

    </div>
);
};


export default CreatePortfolio;
