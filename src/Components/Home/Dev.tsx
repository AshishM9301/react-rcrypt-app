import React from "react";
import {
  DevContainer,
  DevWrapper,
  DevIcon,
} from "../../Assets/styles/HomeComponentStyles";

const Dev = () => {
  let devString: String = "‘dev";
  return (
    <DevContainer>
      <DevWrapper>
        <DevIcon>{devString}</DevIcon>
      </DevWrapper>
    </DevContainer>
  );
};

export default Dev;
