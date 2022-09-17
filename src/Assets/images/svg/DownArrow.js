import React from 'react'
import styled from 'styled-components';
import LogoIcon from './LogoIcon';

const SvgIcon = styled(LogoIcon)`
  width: 11px;
  height: 4px;
  
`;

const DownArrow = () => {
  return (
    <SvgIcon viewBox="0 0 11 7" fill="#fff" ><path d="M9.875 1.125L5.5 5.5L1.125 1.125" stroke="#D9E2EC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></SvgIcon>
  )
}

export default DownArrow