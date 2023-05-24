import React, { useState } from "react";
import { Form } from "./Form";
import { currencies } from "./currencies";
import { Clock } from "./Clock";
import { StyledApp } from "./styled";

function App() {
  const [result, setResult] = useState(0);

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <StyledApp>
      <Clock />
      <Form result={result} calculateResult={calculateResult} />
    </StyledApp>
  );
}

export default App;
