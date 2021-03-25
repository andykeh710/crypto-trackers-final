    import React from "react";

    import Dashboard from "../components/Dashboard";
    import DashboardChart from "../components/DashboardChart";
    const CoinSummaryPage = () => {
    return (
        <div >
        <DashboardChart />
        <div >
        <Dashboard />
        </div>
        </div>
    );
    }; 
    // this will be the home page where dynamically rendered data will show other users and their portfolio scores 


    export default CoinSummaryPage;
