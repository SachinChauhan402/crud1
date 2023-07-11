import React from 'react';

const Profile = ({ match }) => {
  const userId = match.params.id;
  // Fetch user data using userId

  return (
    <div>
      <h2>Profile</h2>
      {/* Display user information */}
    </div>
  );
};

export default Profile;
