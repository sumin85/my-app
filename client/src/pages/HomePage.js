import React,{useState, useEffect} from "react";
import Dashboard from "./Home/Dashboard";


function HomePage() {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://52.79.186.21:3000/api/users")
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