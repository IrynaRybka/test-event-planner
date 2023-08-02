import styled from "@emotion/styled";
import { Icon } from "components/Icon/Icon";

export const SectionBtn = styled.section`
display: grid;
gap: 24px;
grid-template-columns: 56px 56px 56px;
grid-template-rows: 56px;
justify-content: end;
margin-bottom: 40px;

`
export const FilterBtn = styled.button`
border: none;
border-radius: 8px;
background-color: ${({ theme }) => theme.color.translateBtnColor};
cursor: pointer;
box-shadow: 2px 4px 9px 0px ${({ theme }) => theme.color.shadowColor};
padding: 16px;
`
export const IconFilter = styled(Icon)`
fill: transparent;
stroke: ${({ theme }) => theme.color.accentColor};

`
export const IconFilterList = styled(Icon)`
fill: ${({ theme }) => theme.color.textColor};
stroke: ${({ theme }) => theme.color.textColor};
`
export const AddEventBtn = styled(FilterBtn)`
background-color: ${({ theme }) => theme.color.accentColor};
`

export const AddIcon = styled(Icon)`

stroke: ${({ theme }) => theme.color.translateBtnColor};
`