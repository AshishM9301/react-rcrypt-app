import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  position: relative;
`;

export const DevIcon = styled.div`
  display: flex;
  cursor: default;
  margin-top: 100px;
  z-index: 0;
`;

export const Titles = styled.div`
  width: 445px;

  top: 255px;
  left: 54px;

  position: absolute;
`;

export const Title2 = styled.div`
  display: flex;
  cursor: default;
  z-index: 1;

  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 117px;
  /* identical to box height */

  letter-spacing: -0.03em;

  color: #ffffff;
`;

export const Title3 = styled.div`
  font-family: "Dank Mono";
  font-style: italic;
  font-weight: 400;
  font-size: 96px;
  line-height: 47px;
  letter-spacing: -0.14em;

  color: #ffffff;
`;

export const P = styled.p`
  font-family: "Proxima Nova";
  font-size: 16px;
  line-height: 150%;
  /* or 24px */

  color: #ffffff;

  margin-top: 45px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-self: center;

  margin-top: 25px;
`;
