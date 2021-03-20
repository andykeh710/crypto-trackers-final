// import React from 'react'
import axios from 'axios';
import UserService from "../services/UserService";
// import Login from "./login";

const AddUser = (email, id) => {
    // let userEmail = "email";
        let usersDb = UserService.get(id)
        console.log(usersDb)
        let userEmail = email;
    axios({
        method: "POST",
        url: "http://localhost:8080/api/googlelogin",
        data: {email: userEmail} 
    }).then(res => {
        
        var LoggedEmail = res.data.email;
        var LoggedCoins = res.data.coins;
        console.log("---------------++++++++++++++++++++++", LoggedEmail, LoggedCoins); 
        console.log("------------------------------------------------------------", res);
    })

  
    // return (LoggedEmail, LoggedCoins )
}

export default AddUser
