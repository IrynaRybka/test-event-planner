import styled from '@emotion/styled';
import { Icon } from 'components/Icon/Icon';

export const SearchIcon = styled(Icon)`
  fill: ${({ theme }) => theme.color.accentColor};
`;
export const SearchButton = styled.button`
  position: absolute;
  left: 12px;
  top: 12px;
  border: none;
  padding: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  background-color: transparent;
  /* margin-right: 12px; */
`;
export const SearchInput = styled.input`
  color: ${({ theme }) => theme.color.placeholderColor};
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 300;

  padding: 12px 12px 12px 48px;
  width: 212px;

  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  border-radius: 10px;
  border: none;
  outline-color: ${({ theme }) => theme.color.accentColor};
`;
export const SearchFormElement = styled.form`
  position: relative;
  margin-top: 31px;
`;
