import React from 'react';
import { GoogleLogin } from 'react-google-login';

import { refreshTokenSetup } from '../utils/refreshToken';


const clientId = '849863262005-d015trj6hp4piohkfmal41u16n8a3m43.apps.googleusercontent.com';

function Login() {

    const onSuccess = (res) => {
        console.log('[Login Success] current user: ', res.profileObj );
        
    refreshTokenSetup(res); // handles new token ids 
    }


    const onFailure = (res) => {
        console.log('Login failed res: ', res);
    }

    return (
        <div> 
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100pc' }}
            isSignedIn={true}
            />
        </div>
    )
}

export default Login; 