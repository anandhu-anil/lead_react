import React from "react";
import TopComponent from "../components/HomePage/TopComponent";
import Clients from "../components/HomePage/Clients";
import Download from "../components/HomePage/Download";

const Home = props => {
  return (
    <div>
      <TopComponent />
      <Clients />
      <Download />
    </div>
  );
};

export default Home;
