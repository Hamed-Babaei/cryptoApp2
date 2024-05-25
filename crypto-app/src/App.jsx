import React, { useEffect, useState } from "react";
import CoinsTable from "./components/templates/CoinsTable";

function App() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://assets.coincap.io/assets/icons/${coin.symbol.toLocaleLowerCase()}@2x.png"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data =>", data);
        setCoins(data);
      });
  }, []);
  return (
    <>
      <CoinsTable coins={coins} />
    </>
  );
}

export default App;
