import React, { useEffect, useState } from "react";
import CoinsTable from "./components/templates/CoinsTable";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCoins();
  }, []);
  useEffect(() => {
    getData();
  }, [coins]);

  const getAllCoins = async () => {
    const response = await fetch(`https://api.coincap.io/v2/assets`);
    const data = await response.json();
    const dataCoins = data.data;
    setCoins(dataCoins);

    setLoading(false);
  };
  const getData = () => {
    const req = new WebSocket("wss://ws.coincap.io/prices?assets=ALL");
    req.onopen = () => {
      req.send("request is send");
    };
    req.onmessage = (e) => {
      let copyData = [e.data];
      copyData.forEach((item) => {
        const parsedData = JSON.parse(item);
        console.log("parsedData => ", parsedData);
        const coinName = Object.keys(parsedData);
        const coinPrice = Object.values(parsedData);
        const newData = [...coins];
        newData.map((item) => {
          if (item.id == coinName[0] && item.priceUsd != coinPrice[0]) {
            item.priceUsd = coinPrice;
            setCoins(newData);
          }
        });
      });
    };
  };
  return (
    <>
      <CoinsTable coins={coins} loading={loading} />
    </>
  );
}

export default App;
