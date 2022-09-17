import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  min-height: 4rem;
`;

export const NavMenu = styled.div`
  display: flex;
`;

export const NavMenuItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 0 6px;
  padding: 0 7.5px;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  cursor: pointer;

  text-transform: capitalize;
`;

export const IconWrapper = styled.div`
  margin-left: 7px;
`;
