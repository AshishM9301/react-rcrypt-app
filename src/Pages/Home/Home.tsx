import React from "react";
import Stats from "../../Components/Stats/Stats";
import Ecosystem from "../../Container/Ecosystem/Ecosystem";
import Intro from "../../Container/Intro/Intro";
import ScaleGlobal from "../../Container/ScaleGlobal/ScaleGlobal";

const Home = () => {
  return (
    <div>
      <Intro />
      <Stats />
      <Ecosystem />
      <ScaleGlobal />
    </div>
  );
};

export default Home;
