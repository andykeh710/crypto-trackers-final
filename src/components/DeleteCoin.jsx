import { useState } from "react";
import UserService from "../services/UserService";

var userEmailArr = [];
var coinArray = [];
var userIndex; 
const DeleteCoin = (coinId) => {  // get coin id e.g. the name compare to existing coins in array and delete 

const [isActive, setIsActive] = useState(false);
console.log("props LOGGED USER", props.loggedUser.email)
let userEmail = props.loggedUser.email;

    // coin is the coin to add to db    
    //// PULL IN LOGIN INFO - MODIFY COIN ARR
    // promise pending express react ---

    UserService.getAll()
    .then((res) => {
        //console.log("RES > DATA ", res.data)
        let allUsers = res.data;
        if (userEmailArr.length === 0){
        for (let i=0; i< allUsers.length; i++){
                userEmailArr.push(allUsers[i].email);
                coinArray.push(allUsers[i].coins)
        }
        }
        userIndex = userEmailArr.indexOf(userEmail);
        
        let indexlocation = userIndex
        let currentUser = res.data[indexlocation] 
        // gets most recent user -- NEED TO CHANGE THIS TO PULL CURRENT USER 
        //console.log("USERINDEX NEW ", currentUser, userIndex, res.data[indexlocation] )

        let curentID = currentUser._id; 
        let coinArr = currentUser.coins; 
        coinArr.push(coin)  // pushes to user's coins 
        currentUser.coins = coinArr; 
        let data = {coins: coinArr};

        UserService.update(curentID, data); // update user coin list 
        console.log("Trying to store coins ", data)

    }, [userEmailArr]) 
    setIsActive(false); 
};



export default AddCoin;