import React, { useEffect, useState } from "react";
import CoinsTable from "./components/templates/CoinsTable";

function App() {
  const [coins, setCoins] = useState([]);
  const getData = () => {
    const req = new WebSocket("wss://ws.coincap.io/prices?assets=ALL");
    req.onopen = () => {
      req.send("request is send");
    };
    req.onmessage = (e) => {
      console.log("e => ", JSON.parse(e.data));
    };
  };

  const getAllCoins = () => {
    fetch("https://api.coincap.io/v2/assets")
      .then((result) => {
        const res = result.json();
        console.log(res);
      })
      .catch((err) => {
        console.log("err => ", err);
      });
  };
  useEffect(() => {
    console.log("Loaded");
    try {
      getAllCoins();
      // getData();
    } catch (error) {
      console.log("error => ", error);
    }
  }, []);
  return (
    <>
      <CoinsTable coins={coins} />
    </>
  );
}

export default App;
