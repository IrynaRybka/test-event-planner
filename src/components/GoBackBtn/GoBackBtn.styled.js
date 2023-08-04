import styled from '@emotion/styled';
import { Icon } from 'components/Icon/Icon';
import { NavLink } from 'react-router-dom';

export const BackBtn = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.accentColor};
  font-size: 14px;
`;

export const ArrowBack = styled(Icon)`
  margin-right: 8px;
  stroke: ${({ theme }) => theme.color.accentColor};
`;
