import React from "react";
import Dev from "../../Assets/images/svg/'Dev";
import Diamond from "../../Assets/images/svg/Diamond";
import Flow from "../../Assets/images/svg/Flow";
import {
  DevIcon,
  IntroContainer,
  Left,
  Right,
  Title2,
  Title3,
  Titles,
  P,
  ButtonContainer,
  DiamondIcon,
  FlowIcon,
} from "../../Assets/styles/HomeComponentStyles";
import Button from "../../Components/Button/Button";

const Intro = () => {
  return (
    <IntroContainer>
      <Left>
        <DevIcon>
          <Dev />
        </DevIcon>
        <Titles>
          <Title2>The Future</Title2>
          <Title3>is Here</Title3>
          <P>
            Recrypt is a decetalized blockchain built to enable scaleable,
            user-friendly apps for the world
          </P>
          <ButtonContainer>
            <Button title={`Start Building`} green />
            <Button title={`Read docs`} />
          </ButtonContainer>
        </Titles>
      </Left>
      <Right>
        <DiamondIcon>
          <Diamond />
        </DiamondIcon>
        <FlowIcon>
          <Flow />
        </FlowIcon>
      </Right>
    </IntroContainer>
  );
};

export default Intro;
