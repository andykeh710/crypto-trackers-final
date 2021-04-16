
import axios from 'axios';
import UserService from "../services/UserService";


const AddUser = (email, id, name) => {

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
    })
}

export default AddUser
