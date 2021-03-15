import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '849863262005-d015trj6hp4piohkfmal41u16n8a3m43.apps.googleusercontent.com';

function Logout() {

    const onSuccess = () => {
        alert('Logout Success ');
    }


    return (
        <div> 
            <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    )
}

export default Logout; 