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

  // function stepAdd() {
  //   setStep((a) => a + 1);
  // }

  // function stepSub() {
  //   setStep((s) => s - 1);
  // }

  function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
  }

  function init() {
    setStep(1);
    setNum(0);
  }

  const todayDate = new Date();
  const days = num;
  const newDate = addDays(todayDate, days);

  console.log("New Date: ", newDate.toDateString());

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <div>Step: {step}</div>
      </div>

      {/* <div>
        <button onClick={stepSub}>-</button>
        <div>Step: {step}</div>
        <button onClick={stepAdd}>+</button>
      </div> */}

      <div>
        <button onClick={() => setNum((a) => a - step)}>-</button>
        {/* <div>Count: {num}</div> */}
        <input
          type="text"
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
        ></input>
        <button onClick={() => setNum((a) => a + step)}>+</button>
      </div>

      <p>
        <span>
          {num === 0
            ? "Today is"
            : num > 0
            ? `${num} days from today is`
            : `${Math.abs(num)} days ago was`}
        </span>
        <span> {newDate.toDateString()}</span>
      </p>

      {num !== 0 || step !== 1 ? <button onClick={init}>Reset</button> : null}
    </div>
  );
}
