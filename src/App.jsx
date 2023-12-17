import { useState } from "react";
import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [value, setValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = value.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setValue((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <Input userInput={value} onChangeInput={handleChange} />
      {inputIsValid ? (
        <Results input={value} />
      ) : (
        <h2 class="center">Wrong input, duration must be a number above 0</h2>
      )}
      {/* {inputIsValid && <Results input={value} />} */}
    </>
  );
}

export default App;
