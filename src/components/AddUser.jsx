// import React from 'react'
import axios from 'axios';
import UserService from "../services/UserService";
// import AddCoin from "./AddCoin";

const AddUser = (email, id) => {

    /// need to conditionally set this up to ***********************
    // if already with an account then they are logged in but skip post to db 
    // find and search all for above id to compare 
    //take timestamp of coin price
    // dynamically render other user's picks
    // hide/show based on if registered or not 
    // styling 
    // about page 
    // clean up junk code 
    // profile page 

    
    let usersDb = UserService.get(id)  
        console.log(usersDb)
        let userEmail = email;
    axios({
        method: "POST",
        url: "http://localhost:8080/api/googlelogin",
        data: {email: userEmail} 
    }).then(res => {
        /// ADD COIN HERE by passing data into add coin component 

        var LoggedEmail = res.data.email;
        var LoggedCoins = res.data.coins;

        // AddCoin(LoggedEmail, LoggedCoins)

    })
}

export default AddUser
