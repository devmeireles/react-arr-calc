import React from "react";
import "./index.scss";

const Results = ({ parsedInput, result }) => {
  return (
    <div className="result">
      <p>Results for {parsedInput} are:</p>
      <pre className="result__pre">
        {result.map((item, i) => (
          <div key={i}>
            {"{" + `pA: ${item.pA}, pB: ${item.pB}, sum: ${item.sum}`} {"}"}
          </div>
        ))}
      </pre>
    </div>
  );
};

export default Results;
