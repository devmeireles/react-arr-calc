import React, { useState } from "react";
import { calculateResult } from "./utils";
import Results from "./components/Results";
import CalcForm from "./components/CalcForm";
import "./App.scss";


const App = () => {
  const [result, setResult] = useState({});
  const [error, setError] = useState("");
  const [userInput, setUserInput] = useState("");
  const [parsedInput, setParsedInput] = useState("");

  const handleSubmit = () => {
    if (userInput === "") {
      setError("Please enter an input");
      return;
    }

    const response = calculateResult(userInput);

    if (response.result.length === 0) {
      setError("No sums found");
      return;
    }

    setResult(response.result);
    setParsedInput(response.input);
    setError("");
  };

  return (
    <div className="App">
      <CalcForm
        error={error}
        setUserInput={setUserInput}
        handleSubmit={handleSubmit}
      />

      {result.length > 0 && (
        <Results parsedInput={parsedInput} result={result} />
      )}
    </div>
  );
};

export default App;
