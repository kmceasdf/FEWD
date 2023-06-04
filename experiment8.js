// npx create-react-app app1
// delete all in src except App.js, index.js
// in index.js keep only react, reactdom and app imports delete others
// delete all in public except index.html

// to host the app type : npm start
-------------------------------------------------------------
//App.js
import FactorialCalculator from "./FactorialCalculator.js";

function App() {
  return (
    <div className="App">
      <FactorialCalculator/>
    </div>
  );
}

export default App;
--------------------------------------------------
//index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
-----------------------------------------------------
//FactorialCalculator.js
import React, { useState, useMemo } from 'react';

function FactorialCalculator() {
  const [number, setNumber] = useState(0);

  const factorial = useMemo() => {
    let result = 1;
    for(let i = 1; i <=number; i++){
        result *= i;
    }
   };

  const handleChange = (event) => {
    setNumber(parseInt(event.target.value));
  };

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <label htmlFor='numberInput'>Enter a number:</label>
      <input 
      type="number" 
      value={number} 
      onChange={handleChange} 
      />
      <p>Factorial of {number} is: {factorial}</p>
    </div>
  );
}
export default FactorialCalculator;
