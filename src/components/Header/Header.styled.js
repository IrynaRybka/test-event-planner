import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LogoLink = styled(NavLink)`
 color: ${({ theme }) => theme.color.accentColor};
font-family: "Alata", sans-serif;
font-size: 24px;
`
export const HeaderContainer = styled.header`
padding: 32px 24px 24px 24px;
border-bottom: 1px solid ${({ theme }) => theme.color.accentColor};
background-color: ${({ theme }) => theme.color.backgroundHeader};
display: grid;

@media ${screen => screen.theme.screen.tablet} {
    padding: 26px 40px 18px 40px;
  }

`