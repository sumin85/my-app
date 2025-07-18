import React,{useState, useEffect} from "react";
import Dashboard from "./Home/Dashboard";


function HomePage() {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://3.39.182.130:3000/api/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  },[]);

  return(
    <div>
      <Dashboard />
    </div>
  )
}

export default HomePage;