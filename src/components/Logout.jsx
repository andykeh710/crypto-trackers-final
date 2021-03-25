import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { Link } from "react-router-dom";

const clientId = '849863262005-d015trj6hp4piohkfmal41u16n8a3m43.apps.googleusercontent.com';

function Logout(props) {
    const onSuccess = () => {
        props.setLoggedUser('');
        alert('Logout Success ');
    }

    return (
        <div> 
            <GoogleLogout
            clientId={clientId}
            render={renderProps => (
                <Link className="text-center text-warning mt-3 bm-4" to='/' onClick={renderProps.onClick} disabled={renderProps.disabled}>logout</Link>
            )}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    )
}

export default Logout; 