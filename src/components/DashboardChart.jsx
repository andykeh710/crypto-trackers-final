import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HistoryChart from "./historyChart";
import coinGecko from "../apis/coingecko";


const DashboardChart = () => {
const { id } = useParams();
const [coinData, setCoinData] = useState({});
const [isLoading, setIsLoading] = useState(false);

const formatData = (data) => {
    return data.map((el) => {
    return {
        t: el[0],
        y: el[1].toFixed(2),
    };
    });
};

useEffect(() => {
    const fetchData = async () => {
    setIsLoading(true);
    const [day, week, year, detail] = await Promise.all([ // all at once so faster 
        coinGecko.get(`/coins/bitcoin/market_chart/`, {
        params: {
            vs_currency: "usd",
            days: "1",
        },
        }),
        coinGecko.get(`/coins/bitcoin/market_chart/`, {
        params: {
            vs_currency: "usd",
            days: "7",
        },
        }),
        coinGecko.get(`/coins/bitcoin/market_chart/`, {
        params: {
            vs_currency: "usd",
            days: "365",
        },
        }),
        coinGecko.get("/coins/markets/", { /// API call 
        params: {
            vs_currency: "usd",
            ids: id,
        },
        }),
    ]);
    console.log(day);

    setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        detail: detail.data[0],
    });
    setIsLoading(false);
    };

    fetchData();
}, [id]);

const renderData = () => {

        if (isLoading) {
            return (
                <div className="centerStuff">
                <div className="blobs">
                <div className="blob-center"></div>
                <div className="blob"></div>
                <div className="blob"></div>
                <div className="blob"></div>
                <div className="blob"></div>
                <div className="blob"></div>
                <div className="blob"></div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
                </svg>
                </div>
            )
        }

    return (
    <section>
        <div className="coinlist">
        <HistoryChart data={coinData} />
        </div>
    </section>
    );
};

return renderData();
};

export default DashboardChart;