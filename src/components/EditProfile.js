import React, { useState } from 'react';

const EditUser = ({ user, updateUser }) => {
  const [editedName, setEditedName] = useState(user.name);

  const handleInputChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleUpdateClick = () => {
    updateUser(user.id, editedName);
  };

  return (
    <div>
      <input type="text" value={editedName} onChange={handleInputChange} />
      <button onClick={handleUpdateClick}>Update</button>
    </div>
  );
};

export default EditUser;
