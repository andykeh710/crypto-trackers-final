    import React from "react";
    import { Link } from "react-router-dom";
    import { myContext } from "../context/Context";
    import axios from "axios";
    import Login from './login';
    import Logout from './Logout';

    const Header = () => {
        const { username } = React.useContext(myContext);
        const logout = async () => {
        const response = await axios.get("http://localhost:4000/logout", {
            withCredentials: true,
        });
        if (response.data === "success") {
            window.location.href = "/";
        }
        };


        return (
            <div>

                <h1 className="text-center text-warning mt-3 bm-4">Crypto Trackers</h1>
                <ul className="navbar">
            <li>
            <Link className="text-right text-warning mt-3 bm-2" to="/"> Home</Link>
            </li>
            <li><Login /></li>
            <li><Logout /></li> 

            {/* {username ? (
            <li className="text-right text-warning mt-3 bm-2" onClick={logout}>Logout</li>
            ) : (
            <li>
                <Link className="text-right text-warning mt-3 bm-2" to="/login">Login</Link>
            </li> 
            )} */}
        </ul>
            </div>
            
        )


    }

    export default Header
