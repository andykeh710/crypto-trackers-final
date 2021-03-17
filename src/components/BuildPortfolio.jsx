
import TutorialDataService from "../services/CoinService";
import React, { useState, useContext } from "react";
import { WatchListContext } from "../context/watchlistContext";

// const AddCoin = () => {
// const [isActive, setIsActive] = useState(false);
// const { addCoin } = useContext(WatchListContext);
// const availableCoins = [  // hardcoded nice to have would be search feature for all coingecko 
//     "bitcoin",
//     "ethereum",
//     "ripple",
//     "tether",
//     "bitcoin-cash",
//     "litecoin",
//     "eos",
//     "okb",
//     "tezos",
//     "cardano",
// ];

// const handleClick = (coin) => {
//     addCoin(coin);
    
//     setIsActive(false);
// };

// return (
//     <div className="dropdown">
//     <button
//         onClick={() => setIsActive(!isActive)}
//         className="btn btn-primary dropdown-toggle"
//         type="button"
//     >
//         Add Coin
//     </button>
//     <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
//         {availableCoins.map((el) => {
//         return (
//             <a
//             onClick={() => handleClick(el)}
//             href="#"
//             className="dropdown-item"
//             >
//             {el}
//             </a>
//         );
//         })}
//     </div>
//     </div>
// );
// };

// export default AddCoin;
const BuildPortfolio = () => {
const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false
};
const [tutorial, setTutorial] = useState(initialTutorialState);
const [submitted, setSubmitted] = useState(false);

const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
};

const saveTutorial = () => {
    var data = {
    title: tutorial.title,
    description: tutorial.description
    };
    console.log("-------------------------------------------------------------------------DATA ",data)
    TutorialDataService.create(data)
    .then(response => {
        setTutorial({
        id: response.data.id,
        title: response.data.title,
        description: response.data.description,
        published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
    })
    .catch(e => {
        console.log(e);
    });
};

const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
};

return (
        <div className="submit-form">
        {submitted ? (
            <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newTutorial}>
                Add
            </button>
            </div>
        ) : (
            <div>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                type="text"
                className="form-control"
                id="title"
                required
                value={tutorial.title}   /// this is where we pass in the coin *****
                onChange={handleInputChange}
                name="title"
                />
            </div>
    
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                type="text"
                className="form-control"
                id="description"
                required
                value={tutorial.description}
                onChange={handleInputChange}
                name="description"
                />
            </div>
    
            <button onClick={saveTutorial} className="btn btn-success">
                Submit
            </button>
            </div>
        )}
        </div>
    );
    };

export default BuildPortfolio;