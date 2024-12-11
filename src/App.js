import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [num, setNum] = useState(0);
  const [step, setStep] = useState(1);
  // const [date, setDate] = useState("June 21 2027");
  // console.log(setDate);

  function numAdd() {
    setNum((a) => a + step);
  }

  function numSub() {
    setNum((s) => s - step);
  }

  function stepAdd() {
    setStep((a) => a + 1);
  }

  function stepSub() {
    setStep((s) => s - 1);
  }

  // Function to Add days to current date
  function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
  }

  // Get the current date
  const todayDate = new Date();

  // Number of days that we want to add to the current date
  const days = num;

  // Function call to add days
  const newDate = addDays(todayDate, days);

  console.log("New Date: ", newDate.toDateString());

  return (
    <div>
      <div>
        <button onClick={stepSub}>-</button>
        <div>Step: {step}</div>
        <button onClick={stepAdd}>+</button>
      </div>

      <div>
        <button onClick={numSub}>-</button>
        <div>Count: {num}</div>
        <button onClick={numAdd}>+</button>
      </div>
      {!num ? (
        <div>Today is {newDate.toDateString()}</div>
      ) : (
        <div>
          {num} days from today is {newDate.toDateString()}
        </div>
      )}
    </div>
  );
}
