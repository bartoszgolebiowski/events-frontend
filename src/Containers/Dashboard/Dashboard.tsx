import React from "react";
import Container from "@material-ui/core/Container/Container";
import DashboardForm from "../../Components/Dasboard/DashboardForm";
import DashboardList from "../../Components/Dasboard/DashboardList";

export const Dashboard = () => {
  return (
    <Container>
      <DashboardForm />
      <DashboardList />
    </Container>
  );
};

export default Dashboard;
