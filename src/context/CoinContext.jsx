import { createContext, useState, useEffect, useMemo } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "USD",
    Symbol: "$",
  });

  const fetchAllCoins = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "x-cg-demo-api-key": "CG-RxqigeRswFXMLBm8JfLMSDgV",
          },
        }
      );
      if (!response.ok) throw new Error("Failed to fetch coins.");
      const data = await response.json();
      setAllCoin(data);
    } catch (err) {
      console.error("Error fetching coins:", err);
    }
  };

  useEffect(() => {
    fetchAllCoins();
  }, [currency]);

  const contextValue = useMemo(() => ({
    allCoin,
    setAllCoin,
    currency,
    setCurrency,
    fetchAllCoins,
  }), [allCoin, currency]);

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
