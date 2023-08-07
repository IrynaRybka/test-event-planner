import styled from '@emotion/styled';
import { Icon } from 'components/Icon/Icon';

export const TranslateBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 69px;
  border-radius: 8px;
  border: none;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  cursor: pointer;
  padding: 12px 4px 12px 12px;
  background-color: ${({ theme }) => theme.color.translateBtnColor};

  @media ${screen => screen.theme.screen.tablet} {
    position: static;
  }
`;
export const TranslateText = styled.span`
  color: ${({ theme }) => theme.color.textColor};
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 500;
`;
export const TranslateIconArrow = styled(Icon)`
  stroke: ${({ theme }) => theme.color.textColor};
  fill: transparent;
`;
