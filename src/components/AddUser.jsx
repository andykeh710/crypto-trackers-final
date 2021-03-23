
import axios from 'axios';
import UserService from "../services/UserService";


const AddUser = (email, id) => {

    /// need to conditionally set this up to ***********************
    // if already with an account then they are logged in but skip post to db 
    // find and search all for above id to compare 
    //take timestamp of coin price
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
        // AddCoin(LoggedEmail, LoggedCoins)
    })
}

export default AddUser
