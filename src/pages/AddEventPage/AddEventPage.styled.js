import styled from '@emotion/styled';
import { Icon } from 'components/Icon/Icon';
// import { Form } from 'formik';
import { DeleteBtn } from 'pages/EventPage/EventPage.styled';

export const TaglineAdd = styled.h1`
  ${({ theme }) => theme.color.textColor};
  font-size: 24px;
  font-weight: 600;
  margin-top: 25px;
  margin-bottom: 24px;
`;

export const ContainerForm = styled.section`
  background-color: ${({ theme }) => theme.color.translateBtnColor};
  border-radius: 8px;
  padding: 40px 16px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  @media ${screen => screen.theme.screen.desktop} {
    padding: 40px 40px 54px 40px;
  }
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.color.textColor};
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.borderInputColor};
  @media ${screen => screen.theme.screen.tablet} {
    width: 284px;
  }
  @media ${screen => screen.theme.screen.desktop} {
    width: 348px;
  }
`;
export const Label = styled.label`
  position: relative;
  display: grid;
  gap: 8px;
  color: ${({ theme }) => theme.color.accentColor};
`;
export const CrossIcon = styled(Icon)`
  stroke: ${({ theme }) => theme.color.textColor};
  /* position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%) */
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 50px;
  right: 12px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
`;
export const TextDescription = styled.textarea`
  resize: none;
  color: ${({ theme }) => theme.color.textColor};
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.borderInputColor};
  height: 156px;
  @media ${screen => screen.theme.screen.tablet} {
    width: 284px;
  }
  @media ${screen => screen.theme.screen.desktop} {
    width: 348px;
  }
`;
export const CustomForm = styled.form`
  display: grid;
  gap: 20px;

  @media ${screen => screen.theme.screen.tablet} {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-between;
    height: 656px;
    column-gap: 24px;
    row-gap: 20px;
  }
  @media ${screen => screen.theme.screen.desktop} {
    height: 396px;
  }
`;
export const CustomSelect = styled.select`
  color: ${({ theme }) => theme.color.textColor};
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.borderInputColor};
  @media ${screen => screen.theme.screen.tablet} {
    width: 308px;
  }
  @media ${screen => screen.theme.screen.desktop} {
    width: 372px;
  }
`;
export const CustomDate = styled.input`
  position: relative;
  color: ${({ theme }) => theme.color.textColor};
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.borderInputColor};
  @media ${screen => screen.theme.screen.tablet} {
    width: 284px;
  }
  @media ${screen => screen.theme.screen.desktop} {
    width: 348px;
  }
`;
export const AddBtn = styled(DeleteBtn)`
  font-size: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  transition-property: color, background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.hoverBtnColor};
  }

  @media ${screen => screen.theme.screen.tablet} {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 193px;
  }
`;
