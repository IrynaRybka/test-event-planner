import styled from "@emotion/styled";
// import business from '../../assets/images/Rectangle-3des.jpg';

export const ContainerEventSection = styled.section`
/* display: grid;
grid-template-columns: 272px; */
/* grid-template-rows: 480px; */
/* gap: 24px; */
background-color: ${({ theme }) => theme.color.translateBtnColor};
border-radius: 12px;
box-shadow: 2px 4px 9px 0px ${({ theme }) => theme.color.shadowColor};

`
export const ContainerImg = styled.div`
border-top-left-radius: 12px;
border-top-right-radius: 12px;
height: 336px;
/* background-image: url();
background-repeat: no-repeat;
background-size: cover; */
`

export const Picture = styled.img`
background-size:cover;
`
export const ContainerDescription = styled.div`
padding: 16px;
`

