import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/LineChart/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const { currency } = useContext(CoinContext);
  const [coinData, setCoinData] = useState();
  const [historialData, setHistorialData] = useState();

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-RxqigeRswFXMLBm8JfLMSDgV",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((res) => setCoinData(res))
      .catch((err) => console.error(err));
  };

  const fetchHistoricalData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-RxqigeRswFXMLBm8JfLMSDgV",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      options
    )
      .then((res) => res.json())
      .then((res) => setHistorialData(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);

  if (coinData && historialData) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coinData?.image?.large} alt={coinData?.name} />
          <p>
            <b>
              {coinData?.name} ({coinData?.symbol?.toUpperCase()})
            </b>
          </p>
        </div>

        <div className="coin-chart">
          <LineChart historialData={historialData} />
        </div>
        <div className="coin-info">
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Current Price</li>
            <li>
              {currency.Symbol}
              {coinData?.market_data?.current_price?.[
                currency.name.toLowerCase()
              ]?.toLocaleString()}
            </li>
          </ul>

         <ul>
  <li>Market Cap</li>
  <li>
    {currency.Symbol}
    {coinData?.market_data?.market_cap?.[currency.name.toLowerCase()]?.toLocaleString()}
  </li>
</ul>

  <ul>
  <li>24 Hour high</li>
  <li>
    {currency.Symbol}
    {coinData?.market_data?.high_24h?.[currency.name.toLowerCase()]?.toLocaleString()}
  </li>
</ul>
 <ul>
  <li>24 Hour low</li>
  <li>
    {currency.Symbol}
    {coinData?.market_data?.low_24h?.[currency.name.toLowerCase()]?.toLocaleString()}
  </li>
</ul>

  





        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
};

export default Coin;
