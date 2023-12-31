import styled from '@emotion/styled';
import { Icon } from 'components/Icon/Icon';
import { NavLink } from 'react-router-dom';

export const SectionBtn = styled.section`
  display: grid;
  gap: 24px;
  grid-template-columns: 56px 56px 56px;
  grid-template-rows: 56px;
  justify-content: end;
  margin-bottom: 16px;

  @media ${screen => screen.theme.screen.tablet} {
    grid-template-columns: 143px 129px 193px;
  }

  @media ${screen => screen.theme.screen.desktop} {
    position: absolute;
    top: 60px;
    right: 80px;
  }
`;
export const FilterBtn = styled.button`
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.translateBtnColor};
  cursor: pointer;
  box-shadow: 2px 4px 9px 0px ${({ theme }) => theme.color.shadowColor};
  padding: 16px;
  
  @media ${screen => screen.theme.screen.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.color.accentColor};
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
  }
`;
export const FilterBtnList = styled(FilterBtn)`
  @media ${screen => screen.theme.screen.tablet} {
    color: ${({ theme }) => theme.color.textColor};
  }
`;
export const IconFilter = styled(Icon)`
  fill: transparent;
  stroke: ${({ theme }) => theme.color.accentColor};
`;
export const IconFilterList = styled(Icon)`
  fill: ${({ theme }) => theme.color.textColor};
  stroke: ${({ theme }) => theme.color.textColor};
`;
export const AddEventBtn = styled(NavLink)`
  background-color: ${({ theme }) => theme.color.accentColor};
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 2px 4px 9px 0px ${({ theme }) => theme.color.shadowColor};
  padding: 16px;
  transition-property: color, background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.hoverBtnColor};
  }

  @media ${screen => screen.theme.screen.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.color.translateBtnColor};
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const AddIcon = styled(Icon)`
  stroke: ${({ theme }) => theme.color.translateBtnColor};
`;
