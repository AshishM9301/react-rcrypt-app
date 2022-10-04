import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  min-height: 75vh;
`;

export const Left = styled.div`
  position: relative;
  flex: 1;
`;

export const Right = styled.div`
  position: relative;
  flex: 1;
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

export const DiamondIcon = styled.div`
  display: flex;
  cursor: default;
  margin-top: 100px;
  z-index: 0;
  position: absolute;
  right: 40%;
  top: 100px;
`;

export const FlowIcon = styled.div`
  display: flex;
  cursor: default;
  margin-top: 100px;
  z-index: 0;
  position: absolute;
  right: 0;
  top: 100px;
`;

export const StatsContainer = styled.div`
  padding: 0;
`;

export const StatsWrapper = styled.div`
  border-radius: 10px;

  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: -moz-linear-gradient(
    90deg,
    rgba(245, 126, 193, 1) 0%,
    rgba(148, 177, 235, 1) 35%,
    rgba(190, 215, 239, 1) 76%,
    rgba(1, 117, 192, 1) 100%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-linear-gradient(
    90deg,
    rgba(245, 126, 193, 1) 0%,
    rgba(148, 177, 235, 1) 35%,
    rgba(190, 215, 239, 1) 76%,
    rgba(1, 117, 192, 1) 100%
  );

  /* opera 11.10+ */
  background: -o-linear-gradient(
    90deg,
    rgba(245, 126, 193, 1) 0%,
    rgba(148, 177, 235, 1) 35%,
    rgba(190, 215, 239, 1) 76%,
    rgba(1, 117, 192, 1) 100%
  );

  /* ie 6-9 */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0175C0', endColorstr='#F57EC1', GradientType=0 );

  /* ie 10+ */
  background: -ms-linear-gradient(
    90deg,
    rgba(245, 126, 193, 1) 0%,
    rgba(148, 177, 235, 1) 35%,
    rgba(190, 215, 239, 1) 76%,
    rgba(1, 117, 192, 1) 100%
  );

  /* global 94%+ browsers support */
  background: linear-gradient(
    90deg,
    rgba(245, 126, 193, 1) 0%,
    rgba(148, 177, 235, 1) 35%,
    rgba(190, 215, 239, 1) 76%,
    rgba(1, 117, 192, 1) 100%
  );
`;

export const StatsDivider = styled.div`
  height: 100%;
  width: 5px;
  background: #000;
`;

export const InsideContainer = styled.div`
  padding: 16px 21px;
`;

export const TransitionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalTransitionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatsTitle = styled.p`
  width: 85px;

  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: #000000;
`;

export const StatsData = styled.p`
  margin-left: 16px;

  font-family: "Proxima Nova";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  color: #000000;
`;
