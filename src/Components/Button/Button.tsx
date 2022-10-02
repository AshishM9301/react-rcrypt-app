import React from "react";
import styled from "styled-components";

interface Props {
  green?: Boolean;
  title: String;
}

const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  margin-right: 20px;

  border-radius: 1000px;
  background: ${(props) => props.theme.backgroundColor};
  border: ${(props) => props.theme.border};

  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-transform: uppercase;

  color: ${(props) => props.theme.color};
`;

ButtonContainer.defaultProps = {
  theme: { backgroundColor: "", border: "1px solid #F0F4F8", color: "#fff" },
};

const theme = {
  backgroundColor: "#13f196",
  border: "",
  color: "#000",
};

const Button = (props: Props) => {
  return (
    <ButtonContainer theme={props.green ? theme : ""}>
      {props.title}
    </ButtonContainer>
  );
};

export default Button;
