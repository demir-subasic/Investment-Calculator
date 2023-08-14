import React, { useState } from 'react';
import './userInput.css'

const initialUserInput = {
  'current-savings': 0,
  'yearly-contribution': 0,
  'expected-return': 0,
  duration: 0,
}

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [input]: parseFloat(value), // Convert value to a floating-point number
    }));
  };

  return (
    <form onSubmit={submitHandler} className='form'>
      <div className='input-group'>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={userInput['current-savings']}
            onChange={(event) => inputChangeHandler('current-savings', event.target.value)}
            type="number"
            id='current-savings'
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value={userInput['yearly-contribution']}
            onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)}
            type="number"
            id='yearly-contribution'
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label htmlFor="expected-return">Expected Interest (%, per year)</label>
          <input
            value={userInput['expected-return']}
            onChange={(event) => inputChangeHandler('expected-return', event.target.value)}
            type="number"
            id='expected-return'
          />
        </p>
        <p>
          <label htmlFor="duration">Investment duration (years)</label>
          <input
            value={userInput.duration}
            onChange={(event) => inputChangeHandler('duration', event.target.value)}
            type="number"
            id='duration'
          />
        </p>
      </div>
      <p className='actions'>
        <button onClick={resetHandler} type='reset' className='buttonAlt'>
          Reset
        </button>
        <button type='submit' className='button'>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
