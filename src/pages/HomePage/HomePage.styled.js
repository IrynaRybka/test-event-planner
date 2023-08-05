import styled from '@emotion/styled';
import background from '../../assets/images/backgroundHome.png';

export const ContainerDiv = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: top left;
  background-attachment: fixed;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 281px;
  padding-top: 40px;

  @media ${screen => screen.theme.screen.tablet} {
    padding: 40px 40px 300px 40px;
  }

  @media ${screen => screen.theme.screen.desktop} {
    padding: 60px 80px 198px 80px;
  }
`;
export const ContainerEvents = styled.div`
  display: grid;
  grid-template-columns: 272px;
  gap: 24px;
  justify-content: center;

  @media ${screen => screen.theme.screen.tablet} {
    grid-template-columns: 332px 332px;
  }
  @media ${screen => screen.theme.screen.desktop} {
    grid-template-columns: 302px 302px 302px 302px;
  }
`;
export const TitleHomePage = styled.h1`
  color: ${({ theme }) => theme.color.textColor};
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 24px;
  margin-top: 24px;
`;
