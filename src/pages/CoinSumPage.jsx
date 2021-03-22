    import React from "react";
    // import UserPortfolios from "../components/UserPortfolios";
    // import OldCoinList from "../components/OldCoinList";
    import Dashboard from "../components/Dashboard";
    const CoinSummaryPage = () => {
    return (
        <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
{/* 
        <OldCoinList /> 
        <UserPortfolios /> */}
        <Dashboard />
        </div>
    );
    }; 
    // this will be the home page where dynamically rendered data will show other users and their portfolio scores 


    export default CoinSummaryPage;
