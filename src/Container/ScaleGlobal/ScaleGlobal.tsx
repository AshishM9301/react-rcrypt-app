import React from "react";
import Global from "../../Assets/images/svg/Global";
import {
  Left,
  Right,
  ScaleGlobalContainer,
  ScaleGlobalIcon,
  ScaleGlobalTitle,
  ScaleGlobalTitleNamedScale,
  ScaleGlobalTitleOtherElse,
} from "../../Assets/styles/HomeComponentStyles";

const ScaleGlobal = () => {
  return (
    <ScaleGlobalContainer>
      <Left>
        <ScaleGlobalIcon>
          <Global />
        </ScaleGlobalIcon>
      </Left>
      <Right>
        <ScaleGlobalTitle>
          <ScaleGlobalTitleNamedScale>Scale</ScaleGlobalTitleNamedScale>
          <ScaleGlobalTitleOtherElse>
            {" "}
            for global adoption
          </ScaleGlobalTitleOtherElse>
        </ScaleGlobalTitle>
      </Right>
    </ScaleGlobalContainer>
  );
};

export default ScaleGlobal;
