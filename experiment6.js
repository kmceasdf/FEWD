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
