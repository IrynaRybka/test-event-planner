import styled from '@emotion/styled';
import background from '../../assets/images/backgroundHome.png';
import { ContainerImg } from 'components/EventCard/EventCard.styled';

export const ContainerDivEvent = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: top left;
  /* background-size: 100vw 100vh; */
  background-attachment: fixed;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 281px;
  padding-top: 40px;
  display: grid;
  grid-template-columns: 272px;
  gap: 24px;
  justify-content: center;

  @media ${screen => screen.theme.screen.tablet} {
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 263px;
    padding-top: 41px;
    grid-template-columns: 688px;
  }
`;
export const EventCategory = styled.p`
  padding: 6px 12px;
  color: ${({ theme }) => theme.color.accentColor};
  box-shadow: 2px 4px 9px 0px ${({ theme }) => theme.color.shadowColor};
  background-color: ${({ theme }) => theme.color.translateBtnColor};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.42;
`;
export const EventPriority = styled(EventCategory)`
  color: ${({ theme }) => theme.color.priorityHightColor};
`;
export const EventTime = styled(EventCategory)``;
export const ListCategory = styled.ul`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;
export const EventBtn = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.color.translateBtnColor};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.accentColor};
  color: ${({ theme }) => theme.color.accentColor};
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  line-height: 1.3;
  cursor: pointer;
`;
export const DeleteBtn = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: ${({ theme }) => theme.color.accentColor};
  color: ${({ theme }) => theme.color.translateBtnColor};
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  line-height: 1.3;
  cursor: pointer;
  transition-property: color, background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.hoverBtnColor};
  }
`;

export const ContainerBtn = styled.div`
  display: grid;
  grid-template-columns: 108px 108px;
  gap: 24px;

  @media ${screen => screen.theme.screen.tablet} {
    gap: 16px;
    grid-template-columns: 55px 108px;
    justify-content: end;
  }
`;
export const ContainerMain = styled.main`
  background-color: ${({ theme }) => theme.color.translateBtnColor};
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px ${({ theme }) => theme.color.shadowColor};
`;
export const DetailEvent = styled.div`
  padding: 24px 16px 40px 16px;

  @media ${screen => screen.theme.screen.tablet} {
    padding: 24px 24px 40px 24px;
  }
`;
export const Description = styled.p`
  font-size: 14px;
  line-height: 1.42;
  margin-bottom: 24px;
`;
export const EventTitle = styled.h1`
  color: ${({ theme }) => theme.color.textColor};
  font-size: 24px;
  font-weight: 600;

  @media ${screen => screen.theme.screen.tablet} {
    font-size: 32px;
  }
`;
export const ContainerImgDetail = styled(ContainerImg)`
  width: 100%;
  height: 168px;
  background-position: center center;

  @media ${screen => screen.theme.screen.tablet} {
    height: 272px;
  }
`;
