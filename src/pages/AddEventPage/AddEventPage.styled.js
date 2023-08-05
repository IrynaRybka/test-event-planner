import styled from "@emotion/styled";
import { Icon } from "components/Icon/Icon";

export const TaglineAdd = styled.h1`
${({theme}) => theme.color.textColor};
font-size: 24px;
font-weight: 600;
`

export const ContainerForm = styled.section`
background-color: ${({theme}) => theme.color.translateBtnColor};
border-radius: 8px;
padding: 40px 16px;
`

export const Input = styled.input`
color: ${({theme}) => theme.color.textColor};
font-family: "Poppins", sans-serif;
font-size: 16px;
line-height: 1.5; 
padding: 16px 12px;
border-radius: 8px;
border: 1px solid ${({theme}) => theme.color.borderInputColor};
`
export const Label = styled.label`
position: relative;
display: grid;
gap: 8px;
color: ${({theme}) => theme.color.accentColor};

`
export const CrossIcon = styled(Icon)`
stroke: ${({theme}) => theme.color.textColor};
/* position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%) */
`
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
`