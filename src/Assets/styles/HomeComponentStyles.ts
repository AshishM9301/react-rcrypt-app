import styled from "styled-components";

export const DevContainer = styled.div`
  display: flex;
  cursor: default;
`;

export const DevWrapper = styled.div`
  width: 100%;
`;

export const DevIcon = styled.p`
  font-weight: 700;
  font-size: 300px;
  line-height: 365px;
  text-transform: uppercase;

  color: #000;

  background: linear-gradient(rgba(19, 241, 150, 1), rgba(240, 244, 248, 0));

  -webkit-background-clip: text;
  -webkit-text-stroke: 8px transparent;

  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none;
`;
