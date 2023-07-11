import React, { useState } from 'react';

const EditUser = ({ match }) => {
  const userId = match.params.id;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const updateUser = () => {
    // Logic to update user
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <button type="button" onClick={updateUser}>
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
