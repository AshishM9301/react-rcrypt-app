import styled from "styled-components";

import "./css/index.css";

export const AppWrapper = styled.div`
  background: var(--primary-color);

  // font-family: "Proxima Nova", Georgia, sans-serif;

  color: var(--secondary-color);

  min-height: 100vh;
`;

export const AppContainer = styled.div`
  max-width: var(--max-width);
  margin: auto;

  padding: 18px 24px;
`;
