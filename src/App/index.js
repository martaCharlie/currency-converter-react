import React, { useState } from "react";
import { Form } from "./Form";
import { currencies } from "./currencies";
import { Clock } from "./Clock";
import { Container } from "./Container/styled";

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
    <Container>
      <Clock />
      <Form result={result} calculateResult={calculateResult} />
    </Container>
  );
}

export default App;
