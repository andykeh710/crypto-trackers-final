import React, { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Link } from "react-router-dom";

import AddUser from "./AddUser";
import UserService from "../services/UserService";
//import IsLoggedIn from "./IsLoggedIn";
/// 
/// NEED TO ADD - IF USER IS LOGGEDIN CANT LOG IN AGAIN 
//comparing who is logged in to the db 
const clientId = '849863262005-d015trj6hp4piohkfmal41u16n8a3m43.apps.googleusercontent.com';
// var isSignedIn1 = false; 
var emailArr = []
function Login() {
    
    // const [logedUser, setlogedUser] = useState("");

    const [users, setUsers] = useState([]);
    useEffect(() => { // build email array to check 
        retrieveUsers();
    }, [users]);
    const retrieveUsers = () => {
        UserService.getAll()
        .then(response => {
            setUsers(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };
    //console.log("USERS -", users)
    {users.map((user) => {
        emailArr.push(user.email);
    })}
    

    const onSuccess = (res) => {
        console.log('[Login Success] current user: ', res.profileObj);
        //console.log("EMAIL ARR- ", emailArr)
        let email = res.profileObj.email
        let id = res.profileObj.googleId

        if (emailArr.includes(email)){
            console.log("User already exists welcome back ", email)
            //IsLoggedIn(true)
        } else {
            console.log("NEW user ", emailArr)
            AddUser(email, id);
            console.log("EMAIL ARR ", emailArr)
            //IsLoggedIn(true)
        }
    }

    const onFailure = (res) => {
        console.log('Login failed res: ', res);
    }

    return (
        <div> 
            <GoogleLogin
            clientId={clientId}
            render={renderProps => (
                <Link className="text-center text-warning mt-3 bm-4" onClick={renderProps.onClick} disabled={renderProps.disabled}>login</Link>
            )}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />,
        </div>
    )
}

export default Login; 