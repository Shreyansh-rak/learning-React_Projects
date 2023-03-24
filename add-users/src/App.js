import React, { useState } from 'react';

import UserForm from './components/UserForm';
import './App.css';
import UserList from './components/UserList';

function App() {
  const [addNewUser, setAddNewUser] = useState([]);

  const addUserHandler = (newUsers, newUserAge) => {
    setAddNewUser((prevUsers) => {
      return [...prevUsers, { name: newUsers, age: newUserAge, id: Math.random().toString() }];
    });
  };
  // const deleteUserHandler = (newUsers, newUserAge) => {
  //   setAddNewUser((current) => {
  //     current.filter(newUsers => {
  //       return [{ name: newUsers, age: newUserAge }];
  //     });
  //   });
  // };S

  return (
    <React.Fragment>
      <UserForm onAddUser={addUserHandler}>
      </UserForm>
      <UserList
        user={addNewUser}
      //onClick={deleteUserHandler}
      />
    </React.Fragment>
  );
}

export default App;
