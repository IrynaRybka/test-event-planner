import styled from '@emotion/styled';

export const ContainerEventSection = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.color.translateBtnColor};
  border-radius: 12px;
  box-shadow: 2px 4px 9px 0px ${({ theme }) => theme.color.shadowColor};
`;
export const ContainerImg = styled.div`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  height: 336px;

  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContainerDescription = styled.div`
  padding: 16px;
`;
export const ListCategory = styled.ul`
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 1.42;
`;
export const ListCategoryElement = styled.li`
  background-color: ${({ theme }) => theme.color.translateBtnColor};
  border-radius: 8px;
  padding: 6px 12px;
  color: ${({ theme }) => theme.color.priorityHightColor};

  &:not(:last-of-type) {
    margin-right: 8px;
    color: ${({ theme }) => theme.color.accentColor};
  }
`;
export const ListDate = styled.ul`
  position: absolute;
  width: 100%;
  top: 296px;
  left: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.backgroundTimeEvent};
  color: ${({ theme }) => theme.color.accentColor};
  font-size: 14px;
  line-height: 1.71;
`;
export const ElementListDate = styled.li`
  padding: 8px 16px;
`;
export const TitleEvent = styled.h3`
  color: ${({ theme }) => theme.color.eventTitleColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 16px;
`;

export const DescriptionEvent = styled.p`
  color: ${({ theme }) => theme.color.eventDescriptionColor};
  font-size: 14px;
  line-height: 1.42;
  padding-bottom: 12px;
`;
