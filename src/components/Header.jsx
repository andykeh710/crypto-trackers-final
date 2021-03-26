    import React from "react";
    import { Link } from "react-router-dom";
    import Login from './login';
    import Logout from './Logout';


    const Header = ({loggedUser, sticky, setLoggedUser}) => {
        console.log("HEADER LOGGED USER ", loggedUser, sticky)

        // var loggedUser = props.loggedUser;
        // let sticky = props.sticky



        return (

            <nav className={sticky ? "navbar navbar-sticky "  : "navbar navbar-sticky"}>
            {/* <h1 className="text-center text-warning mt-3 bm-4">Crypto Trackers</h1> */}
            <div className="">
            {/* {sticky ? <img src="https://drive.google.com/uc?id=1V-B6GzMF3PEUBXeDxJOwONfgNztKP_6P"
                            alt="logo" 
                            className="navbar--logo" /> : null} */}
                <h1 className="text-warning">Crypto Trackers</h1>
                </div>

                {loggedUser === '' || loggedUser === undefined ? (
                    <div>
                <ul className="navbar--link">
                <li>
                <Link className="navbar--link-item text-left text-warning mt-3 bm-2" to="/" > Home</Link>
                </li>
                <li><Login className="navbar--link-item" setLoggedUser={setLoggedUser} exact path="/" /></li>
                </ul>
                </div>

                ) : (
                <ul className="navbar--link">
                <li>
                <Link className="navbar--link-item text-warning mt-3 bm-2" to="/" > Home</Link>
                </li>
                <li>
                <Link className="navbar--link-item text-warning mt-3 bm-2" to="/createPortfolio"> Create Portfolio</Link>
                </li>
                <li><Logout className="navbar--link-item" setLoggedUser={setLoggedUser} exact path="/"  /></li>
                </ul>
                )}
            </nav>
        )}

     export default Header
