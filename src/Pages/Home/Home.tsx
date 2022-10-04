import React from "react";
import Stats from "../../Components/Stats/Stats";
import Ecosystem from "../../Container/Ecosystem/Ecosystem";
import Intro from "../../Container/Intro/Intro";

const Home = () => {
  return (
    <div>
      <Intro />
      <Stats />
      <Ecosystem />
    </div>
  );
};

export default Home;
