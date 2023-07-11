import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UserList from './components/UserList';
// import CreateUser from './components/CreateUser';
// import EditUser from './components/EditUser';
// import Profile from './components/Profile';
// import EditProfile from './components/EditProfile';

const App = () => {
  const [listUser, setListUser] = useState([]);
  let addList = (inputText) => {
    if(inputText!== ''){
    setListUser([...listUser, inputText]);
  }
  }

  const deleteListUser =(key) => {
      let newListUsers = [...listUser]
      newListUsers.splice(key,1)
      setListUser([...newListUsers])
  }


  return (
    <div style={{backgroundColor: "#9fbec3" , width: "100%", height: "100vh"}}>
      <div className='center-container'>
        <Dashboard addList={addList} />
       <h1 className='app-heading' style={{ marginLeft: "30rem"}}>Users</h1>
       <hr style={{width : "50rem"}}/>
       {listUser.map((listUser, i)=> {
        return (
          <UserList key={i} index={i} item={listUser} deleteUser={deleteListUser} />
        )
       })}
      </div>
      </div>
  );
};

export default App;
