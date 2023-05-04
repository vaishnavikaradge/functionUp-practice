
import React, { useState } from 'react';
import UserCard from './Card'

function Users({ user }){

    const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const response = await fetch('https://reqres.in/api/users/');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <button onClick={getUsers}>Get Users</button>
      <div className="card-container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
 export default Users;