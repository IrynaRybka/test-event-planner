import { useMediaQuery } from '@mui/material';
import {
  AddEventBtn,
  AddIcon,
  FilterBtn,
  FilterBtnList,
  IconFilter,
  IconFilterList,
  SectionBtn,
} from './NavigationHomeBtn.styled';

const NavigationHomeBtn = () => {
  const isTablet = useMediaQuery('(min-width: 768px)');
  return (
    <SectionBtn>
      <FilterBtn>
        {isTablet ? <span>Category</span> : null}
        <IconFilter id="icon-filters" width={24} height={24} />
      </FilterBtn>
      <FilterBtnList>
        {isTablet ? <span>Sort by</span> : null}
        <IconFilterList id="icon-filters-list" width={24} height={24} />
      </FilterBtnList>
      <AddEventBtn to="addEvent">
        <AddIcon id="icon-plus" width={24} height={24} />
        {isTablet ? <span>Add new event</span> : null}
      </AddEventBtn>
    </SectionBtn>
  );
};
export default NavigationHomeBtn;
