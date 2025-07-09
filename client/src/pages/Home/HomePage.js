import React,{useState, useEffect} from "react";
import Header from "./components/Header";
import FriendsSchedule from "./pages/Home/FriendSchedule";
import GroupNotifications from "./pages/Home/GroupNotifications";
import Dashboard from "./pages/Home/Dashboard";
import MyScheduleCard from "./pages/Home/MyScheduleCard";



function HomePage() {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://52.79.186.21:3000/api/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  },[]);

  return(
    <div>
      <Header />
      <Dashboard />
      <MyScheduleCard />
      <FriendsSchedule />
      <GroupNotifications />
    </div>
  )
}

export default HomePage;