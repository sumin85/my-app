import React from "react";
import FriendsSchedule from "./FriendSchedule";
import GroupNotifications from "./GroupNotifications";
import MyScheduleCard from "./MyScheduleCard";
const Dashboard = () => (
  <div className="dashboard">
    <div className="column">
      <MyScheduleCard title="📆 오늘의 일정" />
      <MyScheduleCard title="📅 이번 주 일정" />
    </div>
    <div className="column">
      <FriendsSchedule />
    </div>
    <div className="column">
      <GroupNotifications />
      <NotificationBell />
    </div>
  </div>
);

export default Dashboard;