    import React from "react";
    import { Link } from "react-router-dom";

    import Login from './login';
    import Logout from './Logout';
    import IsLoggedIn from "./IsLoggedIn";




    const Header = ({setLoggedUser}) => {

        return (
            <div>

            <h1 className="text-center text-warning mt-3 bm-4">Crypto Trackers</h1>
            <ul className="navbar">
            <li>
            <Link className="text-right text-warning mt-3 bm-2" to="/"> Home</Link>
            </li>
            <li>
            <Link className="text-right text-warning mt-3 bm-2" to="/createPortfolio"> Create Portfolio</Link>
            </li>
            <li><Login setLoggedUser={setLoggedUser}/></li>
            <li><Logout /></li>
            <li>test</li>
            
            

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
