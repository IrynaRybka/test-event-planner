import styled from '@emotion/styled'
import background from '../../assets/images/backgroundHome.png';

export const ContainerDiv = styled.div`
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
`