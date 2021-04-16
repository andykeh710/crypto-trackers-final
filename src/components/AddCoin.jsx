    import { useState } from "react";
    import UserService from "../services/UserService";

    var userEmailArr = [];
    var coinArray = [];
    var userIndex; 

    const AddCoin = (props) => {
    const [isActive, setIsActive] = useState(false);

    console.log("props LOGGED USER", props.loggedUser.email)
    
    let userEmail = props.loggedUser.email;
    const availableCoins = [  // hardcoded nice to have would be search feature for all coingecko 
        "bitcoin",
        "ethereum",
        "cardano",
        "ripple",
        "tether",
        "bitcoin-cash",
        "litecoin",
        "eos",
        "okb",
        "tezos",
    ];

    const handleClick = (coin) => {
        // coin is the coin to add to db    
        //// PULL IN LOGIN INFO - MODIFY COIN ARR
        // promise pending express react ---

        UserService.getAll()
        .then((res) => {
            //console.log("RES > DATA ", res.data)
            let allUsers = res.data;
            if (userEmailArr.length === 0){
            for (let i=0; i< allUsers.length; i++){
                    userEmailArr.push(allUsers[i].email);
                    coinArray.push(allUsers[i].coins)
            }
            }
            userIndex = userEmailArr.indexOf(userEmail);
            let indexlocation = userIndex
            let currentUser = res.data[indexlocation] 
            return currentUser

            })
            .then((currentUser) => {
                console.log(currentUser, "CURRENT USER ---------------------------")
            let curentID = currentUser._id; 
            let coinArr = currentUser.coins; 
            coinArr.push(coin)  // pushes to user's coins 
            currentUser.coins = coinArr; 
            let data = {coins: coinArr};
            UserService.update(curentID, data); // update user coin list 
            console.log("Trying to store coins ", data)

        }, [userEmailArr]) 
        .then((res) => {
            setIsActive(false);
            window.location.reload();
        })
    };


    return (
        <div className="dropdown">
        <button
            onClick={() => setIsActive(!isActive)}
            className="btn dropdown-toggle third"
            type="button"
        >
            Add Coin
        </button>

        <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
            {availableCoins.map((el) => {
            return (
                <a
                onClick={() => handleClick(el)}
                href={() => false}
                className="dropdown-item"
                >
                {el}
                </a>
            );
            })}
        </div>
        </div>
    )};

    export default AddCoin;