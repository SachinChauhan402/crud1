import React, { useState } from 'react';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const createUser = () => {
    // Logic to create user
  };

  return (
    <div>
      <h2>Create User</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <button type="button" onClick={createUser}>
          Create User
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
