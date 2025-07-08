import React from "react";
import ScheduleCard from "../components/ScheduleCard";
import FriendsSchedule from "../components/FriendsSchedule";
import GroupNotifications from "../components/GroupNotifications";
import NotificationBell from "../components/NotificationBell";

const Dashboard = () => (
  <div className="dashboard">
    <div className="column">
      <ScheduleCard title="📆 오늘의 일정" />
      <ScheduleCard title="📅 이번 주 일정" />
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