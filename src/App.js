import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://52.79.186.21:3000/api/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  },[]);
  
  return(
    <div>
      <h2>유저목록</h2>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
