import React, { Component } from "react";
import { calculateResult } from "./utils";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      result: "",
      error: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ userInput: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { userInput } = this.state;

    if (userInput === "") {
      this.setState({
        userInput: "",
        result: "",
        error: "Please enter an input",
      });
      return;
    }

    const response = calculateResult(userInput);
    const { result, error, input } = response;

    if (result.length === 0) {
      this.setState({
        userInput: input,
        result: "",
        error: "No sums found",
      });
      return;
    }

    this.setState({
      result,
      error,
      userInput: input
    });
  }

  render() {
    const { userInput, result, error } = this.state;

    return (
      <div className="App">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form__section">
            <label htmlFor="input" className="form__section-label">
              Input
            </label>
            <input
              type="text"
              name="input"
              id="input"
              onChange={this.handleChange}
              className="form__section-input"
            />

            {error && <p className="form__section-error">{error}</p>}
          </div>

          <div className="form__section">
            <button type="submit" className="form__section-button">
              Calculate
            </button>
          </div>
        </form>

        {result.length > 0 && (
          <div className="result">
            <p>Results for {userInput} are:</p>
            <pre className="result__pre">
              {result.map((item, i) => (
                <div key={i}>
                  {"{" + `pA: ${item.pA}, pB: ${item.pB}, sum: ${item.sum}`}{" "}
                  {"}"}
                </div>
              ))}
            </pre>
          </div>
        )}
      </div>
    );
  }
}

export default App;
