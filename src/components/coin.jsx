import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UserService from "../services/UserService";

var userEmailArr = [];
var coinArray = [];
var userIndex; 

const DeleteCoin = (id, user) => {  // get coin id e.g. the name compare to existing coins in array and delete 
    /// take coin id and compare and delete for user 
            console.log(id, user, "PROPS IN DELETE COIN ")
                UserService.getAll()
                .then((res) => {
    
                    let allUsers = res.data;
                    if (userEmailArr.length === 0){
                    for (let i=0; i< allUsers.length; i++){
                            userEmailArr.push(allUsers[i].email);
                            coinArray.push(allUsers[i].coins)
                    }
                    }
                    userIndex = userEmailArr.indexOf(user);
                    
                    let indexlocation = userIndex
                    let currentUser = res.data[indexlocation] 
                    console.log(currentUser, "CURRENT USER ")
                    return currentUser
                })
                    .then((currentUser) => {
                    let curentID = currentUser._id; 
                    let coinArr = currentUser.coins; 
    
                    const indexSplice = coinArr.indexOf(id)
                    if (indexSplice > -1) {
                        coinArr.splice(indexSplice, 1)
                    }
    
                    let data = {coins: coinArr};
    
                    UserService.update(curentID, data)
                    console.log('delete');
    
                },[userEmailArr]) 
                .then(() => {
                    window.location.reload();
                })
    };
    
    
const Coin = ({coin, loggedUser}) => {



    return (
        <Link to={`/coins/${coin.id}`} className="text-decoration-none my-1 coin">
            <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
                <img className="coinlist-image" src={coin.image} alt=""/>
                <span className="text-decoration-none">
                    $ {coin.current_price}</span>

                <span 
                className={
                    coin.price_change_percentage_24h < 0 
                    ? "text-danger mr-2" 
                    : "text-success mr-2"
                    }>
                    {" "}
                    {
                    coin.price_change_percentage_24h < 0 
                    ? (
                        <i className="fa fa-sort-desc align-middle mr-1"></i>
                    ) 
                    : (
                        <i className="fa fa-sort-asc align-middle mr-1"></i>
                    )} 
                    {coin.price_change_percentage_24h} %
                </span>
                <i onClick={(e) =>{
                    e.preventDefault()
                    DeleteCoin(coin.id, loggedUser)
                }} className="fa fa-times-circle text-danger"></i>
            </li>
        </Link> 
    )
}

export default Coin
