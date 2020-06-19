import React, { useState } from "react";
import Header from "./Header";

function App() {
  const [countNumber, setCounNumber] = useState(0);

  function addCountNumber() {
    setCounNumber(countNumber + 1);
  }
  return (
    <div className="App">
      <Header />
      <div>{countNumber}</div>
      <button onClick={addCountNumber}>플러스</button>
    </div>
  );
}

export default App;
