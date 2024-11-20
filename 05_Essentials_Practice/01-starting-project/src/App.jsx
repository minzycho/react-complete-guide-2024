import { useState } from "react";

import Header from "./component/Header";
import UserInput from "./component/UserInput";
import Results from "./component/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChangeInput(id, newValue) { 
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [id] : +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChangeInput} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;