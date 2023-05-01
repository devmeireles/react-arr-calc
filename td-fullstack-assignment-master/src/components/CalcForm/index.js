import React from "react";
import "./index.scss";

const CalcForm = ({ error, setUserInput, handleSubmit }) => {
  return (
    <div className="form">
      <div className="form__section">
        <label htmlFor="input" className="form__section-label">
          Input
        </label>
        <input
          type="text"
          name="input"
          id="input"
          onChange={(e) => setUserInput(e.target.value)}
          className="form__section-input"
        />

        {error && <p className="form__section-error">{error}</p>}
      </div>

      <div className="form__section">
        <button
          type="button"
          className="form__section-button"
          onClick={handleSubmit}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default CalcForm;
