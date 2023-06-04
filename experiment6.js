// npx create-react-app app1
// delete all in src except App.js, index.js
// in index.js keep only react, reactdom and app imports delete others
// delete all in public except index.html

// to host the app type : npm start
-------------------------------------------------------------------------------------
//form.js
import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:' , name);
        console.log('Email:' , email);
    };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            />
        </div>

        <div>
            <label htmlFor="email">Email:</label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Form;
-------------------------------------------------------------------------------------
//App.js

import Form from "./Form.js"

function App() {
  return (
    <div className="App">
      <Form/>
    </div>
  );
}
export default App;
-------------------------------------------------------------------------------------

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
