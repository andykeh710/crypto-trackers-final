import React, { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Link } from "react-router-dom";

import AddUser from "./AddUser";
import UserService from "../services/UserService";
//import IsLoggedIn from "./IsLoggedIn";


//comparing who is logged in to the db 
const clientId = '849863262005-d015trj6hp4piohkfmal41u16n8a3m43.apps.googleusercontent.com';
var emailArr = []
function Login({setLoggedUser}) {
    
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

    users.map((user) => (
        emailArr.push(user.email)
    ), [setUsers])
 
    

    const onSuccess = (res) => { /// this runs when user is properly logged in 
        console.log('[Login Success] current user: ', res.profileObj);
        let email = res.profileObj.email
        let id = res.profileObj.googleId
        let name = res.profileObj.name

        if (emailArr.includes(email)){
            console.log("User already exists welcome back ", email)
            return setLoggedUser(res.profileObj)

        } else {
            console.log("NEW user ", emailArr)
            AddUser(email, id, name);
            console.log("EMAIL ARR ", emailArr)
            return setLoggedUser(res.profileObj)
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
                <Link className="text-center text-warning mt-3 bm-4" 
                onClick={renderProps.onClick} 
                disabled={renderProps.disabled}>login</Link>
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