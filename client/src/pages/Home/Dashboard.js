import React from "react";
import FriendSchedule from "./FriendSchedule";
import GroupNotifications from "./GroupNotifications";
import MyScheduleCard from "./MyScheduleCard";


const Dashboard = () => (
  <div className="dashboard">
    <div className="column">
      <MyScheduleCard title="📆 오늘의 일정" />
      <MyScheduleCard title="📅 이번 주 일정" />
    </div>
    <div className="column">
      <FriendSchedule />
    </div>
    <div className="column">
      <GroupNotifications />
    </div>
  </div>
);

export default Dashboard;