    import React from "react";
    import AddCoin from "../components/AddCoin";
    import CoinList from "../components/CoinList";

    const CoinSummaryPage = () => {
    return (
        <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
            
        <CoinList />
        </div>
    );
    }; 
    /// this will be the home page where dynamically rendered data will show other users and their portfolio scores 


    export default CoinSummaryPage;
