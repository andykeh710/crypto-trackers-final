    import React from "react";
    import { Link } from "react-router-dom";
    import Login from './login';
    import Logout from './Logout';



    const Header = (props) => {
        console.log("HEADER LOGGED USER ", props)

        var loggedUser = props.loggedUser;


        return (
            <div >

            <h1 className="text-center text-warning mt-3 bm-4">Crypto Trackers</h1>
        
            {loggedUser === '' || loggedUser === undefined ? (
            <ul className="navbar">
            <li>
            <Link className="text-right text-warning mt-3 bm-2" to="/" > Home</Link>
            </li>
            <li><Login setLoggedUser={props.setLoggedUser} exact path="/"/></li>
            </ul>

            ) : (
            <ul className="navbar">
            <li>
            <Link className="text-right text-warning mt-3 bm-2" to="/" > Home</Link>
            </li>
            <li>
            <Link className="text-right text-warning mt-3 bm-2" to="/createPortfolio"> Create Portfolio</Link>
            </li>
            <li><Logout setLoggedUser={props.setLoggedUser} exact path="/"  /></li>
            </ul>
            )}

        </div>
            
        )}

     export default Header
