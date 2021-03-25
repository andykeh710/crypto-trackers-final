
import axios from 'axios';
import UserService from "../services/UserService";


const AddUser = (email, id, name) => {

    /// need to conditionally set this up to ***********************
    // if already with an account then they are logged in but skip post to db 
    // find and search all for above id to compare 
    //take timestamp of coin price
    // profile page 

    
    let usersDb = UserService.get(id)  
        console.log("USER DB ",usersDb)
        let userName = name;
        let userEmail = email;
    axios({
        method: "POST",
        url: "http://localhost:8080/api/googlelogin",
        data: {email: userEmail, name: userName} 
    }).then(res => {
console.log("THIS IOS THE RESPONSE ", res)

        /// ADD COIN HERE by passing data into add coin component 
        // AddCoin(LoggedEmail, LoggedCoins)
    })
}

export default AddUser
