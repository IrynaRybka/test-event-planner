import styled from '@emotion/styled';
import { Icon } from 'components/Icon/Icon';
import { NavLink } from 'react-router-dom';

export const BackBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.accentColor};
  font-size: 14px;
  transition-property: color, background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.hoverBtnColor};
  }
`;

export const ArrowBack = styled(Icon)`
  margin-right: 8px;
  stroke: ${({ theme }) => theme.color.accentColor};
`;
