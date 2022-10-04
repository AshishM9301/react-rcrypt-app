import React from "react";
import Circle from "../../Assets/images/svg/Circle";
import {
  CircleIcon,
  EcoSystemContainer,
  EcoSystemData,
  EcoSystemTitle,
  Left,
  Right,
} from "../../Assets/styles/HomeComponentStyles";

const Ecosystem = () => {
  return (
    <EcoSystemContainer>
      <Left>
        <EcoSystemTitle>Join the amazing growing ecosystem</EcoSystemTitle>
        <EcoSystemData>
          Recrypt is the fastest blockchain in the world and the fastest growing
          ecosystem in crypto, with over 400 projects spanninng DeFi, NFTs, Web3
          and more.
        </EcoSystemData>
      </Left>
      <Right>
        <CircleIcon>
          <Circle />
        </CircleIcon>
      </Right>
    </EcoSystemContainer>
  );
};

export default Ecosystem;
