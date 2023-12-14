import { useState } from "react";

export default function Input() {
  const [value, setValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(inputIdentifier, newValue) {
    setValue((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              required
              value={value.initialInvestment}
              onChange={(event) =>
                handleChange("initialInvestment", event.target.value)
              }
            ></input>
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              required
              value={value.annualInvestment}
              onChange={(event) =>
                handleChange("annualInvestment", event.target.value)
              }
            ></input>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              required
              value={value.expectedReturn}
              onChange={(event) =>
                handleChange("expectedReturn", event.target.value)
              }
            ></input>
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              required
              value={value.duration}
              onChange={(event) => handleChange("duration", event.target.value)}
            ></input>
          </p>
        </div>
      </section>
    </>
  );
}
