    import CoinService from "../services/CoinService";
    import { useState, useContext } from "react";
    import { WatchListContext } from "../context/watchlistContext";
    import UserService from "../services/UserService";
    import { useGoogleLogin } from 'react-google-login'
    // import SignIn from './LoginStatus'
    import ReactDOM from 'react-dom';
    import { GoogleLogin } from 'react-google-login';
    
    
    // const signIn = useGoogleLogin;
    const AddCoin = () => {
    const [isActive, setIsActive] = useState(false);
    const { addCoin } = useContext(WatchListContext);
    const availableCoins = [  // hardcoded nice to have would be search feature for all coingecko 
        "bitcoin",
        "ethereum",
        "ripple",
        "tether",
        "bitcoin-cash",
        "litecoin",
        "eos",
        "okb",
        "tezos",
        "cardano",
    ];

    const handleClick = (coin) => {
        // coin is the coin to add to db    //// PULL IN LOGIN INFO - MODIFY COIN ARR
        let coinName = coin; 
        const saveCoin = () => {
            var data = {
            name: coinName,
            };
            console.log("-------------------------------------------------------------------------DATA ",data, "------------------------------------------ ")
            CoinService.create(data)
            // .then(response => {
            //     setCoin({
            //     id: response.data.id,
            //     name: response.data.name
            //     });
            //     setSubmitted(true);
            //     console.log(response.data);
            // })
            // .catch(e => {
            //     console.log(e);
            // });
        };
        addCoin(coin);
        saveCoin();
        setIsActive(false);
    };

    return (
        <div className="dropdown">
        <button
            onClick={() => setIsActive(!isActive)}
            className="btn btn-primary dropdown-toggle"
            type="button"
        >
            Add Coin
        </button>
        <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
            {availableCoins.map((el) => {
            return (
                <a
                onClick={() => handleClick(el)}
                href="#"
                className="dropdown-item"
                >
                {el}
                </a>
            );
            })}
        </div>
        </div>
    );
    };

    export default AddCoin;