import styled from "@emotion/styled";

export const EventCategory = styled.p`
padding: 6px 12px;
color: ${({ theme }) => theme.color.accentColor};
box-shadow: 2px 4px 9px 0px ${({ theme }) => theme.color.shadowColor};
background-color: ${({ theme }) => theme.color.translateBtnColor};
border-radius: 8px;
font-size: 14px;
line-height: 1.42; 
`
export const EventPriority = styled(EventCategory)`
color: ${({ theme }) => theme.color.priorityHightColor};
`
export const EventTime = styled(EventCategory)`
`
export const ListCategory = styled.ul`
display: flex;
align-items: center;
align-self: stretch;
gap: 12px;
flex-wrap: wrap;
margin-bottom: 40px;
`
export const EventBtn = styled.button`
padding: 8px 16px;
background-color: ${({ theme }) => theme.color.translateBtnColor};
border-radius: 4px;
border: 1px solid ${({ theme }) => theme.color.accentColor};
color: ${({ theme }) => theme.color.accentColor};
font-family: "Poppins", sans-serif;
font-size: 12px;
line-height: 1.3;
cursor: pointer;
`
export const DeleteBtn = styled.button`
padding: 8px 16px;
border-radius: 4px;
border: none;
background-color: ${({ theme }) => theme.color.accentColor};
color: ${({ theme }) => theme.color.translateBtnColor};
font-family: "Poppins", sans-serif;
font-size: 12px;
line-height: 1.3;
cursor: pointer;
`

export const ContainerBtn = styled.div`
display: grid;
grid-template-columns: 108px 108px;
gap: 24px;

`
export const ContainerMain = styled.main`
background-color: ${({ theme }) => theme.color.translateBtnColor};
border-radius: 8px;
box-shadow: 2px 4px 9px 0px ${({ theme }) => theme.color.shadowColor};;
`
export const DetailEvent = styled.div`
padding: 24px 16px 40px 16px;
`
export const Description = styled.p`
font-size: 14px;
line-height: 1.42;
margin-bottom: 24px;
`
