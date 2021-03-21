
import CoinService from "../services/CoinService";
import React, { useState, useContext } from "react";
// import { WatchListContext } from "../context/watchlistContext";
import UserService from "../services/UserService";
// export default AddCoin;
const BuildPortfolio = () => {
const initialCoinState = {
    id: null,
    name: "",
    description: "",
    published: false
};
const [coin, setCoin] = useState(initialCoinState);  //[tutorial, setTutorial]
const [submitted, setSubmitted] = useState(false);

const handleInputChange = event => {
    const { name, value } = event.target;
    setCoin({ ...coin, [name]: value });
};

const saveCoin = () => {
    var data = {
    name: coin.name,
    description: coin.description
    };
    console.log("-------------------------------------------------------------------------DATA ",data)
    CoinService.create(data)
    .then(response => {
        setCoin({
        id: response.data.id,
        title: response.data.title
        });
        setSubmitted(true);
        console.log(response.data);
    })
    .catch(e => {
        console.log(e);
    });
};

const newCoin = () => {
    setCoin(initialCoinState);
    setSubmitted(false);
};



return (
        <div className="submit-form">
        {submitted ? (
            <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newCoin}>
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
                value={coin.name}   /// this is where we pass in the coin *****
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
                value={coin.description}
                onChange={handleInputChange}
                name="description"
                />
            </div>
    
            <button onClick={saveCoin} className="btn btn-success">
                Submit
            </button>
            </div>
        )}
        </div>
    );
    };

export default BuildPortfolio;