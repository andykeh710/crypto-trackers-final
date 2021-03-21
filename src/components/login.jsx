import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Link } from "react-router-dom";
// import { refreshTokenSetup } from '../utils/refreshToken';
// import axios from 'axios';
import AddUser from "./AddUser";



const clientId = '849863262005-d015trj6hp4piohkfmal41u16n8a3m43.apps.googleusercontent.com';

function Login() {
    const [logedUser, setlogedUser] = useState("");

    const onSuccess = (res) => {
        console.log('[Login Success] current user: ', res.profileObj);
        let email = res.profileObj.email
        let id = res.profileObj.googleId
        AddUser(email, id);
        
        
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