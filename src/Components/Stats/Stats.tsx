import React from "react";
import {
  InsideContainer,
  StatsContainer,
  StatsData,
  StatsDivider,
  StatsTitle,
  StatsWrapper,
  TransitionContainer,
  TotalTransitionContainer,
} from "../../Assets/styles/HomeComponentStyles";

const Stats = () => {
  return (
    <StatsContainer>
      <StatsWrapper>
        <InsideContainer>
          <TransitionContainer>
            <StatsTitle>Transaction per second</StatsTitle>
            <StatsData>2,518</StatsData>
          </TransitionContainer>
        </InsideContainer>
        <StatsDivider />
        <InsideContainer>
          <TotalTransitionContainer>
            <StatsTitle>Total Transactions</StatsTitle>
            <StatsData>85,524,232,111</StatsData>
          </TotalTransitionContainer>
        </InsideContainer>
        <StatsDivider />
        <InsideContainer>
          <TransitionContainer>
            <StatsTitle>Avg. cost per transaction</StatsTitle>
            <StatsData>$0.00021</StatsData>
          </TransitionContainer>
        </InsideContainer>
        <StatsDivider />
        <InsideContainer>
          <TransitionContainer>
            <StatsTitle>Transaction per second</StatsTitle>
            <StatsData>2,518</StatsData>
          </TransitionContainer>
        </InsideContainer>
      </StatsWrapper>
    </StatsContainer>
  );
};

export default Stats;
