import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [usersData, setUsersData] = useState([]);

  const addUserDataHandler = (uName, uAge) => {
    setUsersData((PrevUsersList) => {
      return [...PrevUsersList, { name: uName, age: uAge, id: (PrevUsersList.length + 1) }];
    })
  };

  return (
    <div>
      <AddUser onAddUser={addUserDataHandler} />
      <UsersList users={usersData} />
    </div>
  );
}

export default App;
