import { useState } from "react";
import UserService from "../services/UserService";
// import coin from "./coin"
// import AddCoin from "./AddCoin"

var userEmailArr = [];
var coinArray = [];
var userIndex; 
function DeleteCoin(id, user) {  // get coin id e.g. the name compare to existing coins in array and delete 
/// take coin id and compare and delete for user 

console.log(id, user, "PROPS IN DELETE COIN ")
const [setIsActive] = useState(false);
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
        userIndex = userEmailArr.indexOf(user);
        
        let indexlocation = userIndex
        let currentUser = res.data[indexlocation] 
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
    .then((res) => {
        setIsActive(false);
        window.location.reload();
    })
};


export default DeleteCoin;