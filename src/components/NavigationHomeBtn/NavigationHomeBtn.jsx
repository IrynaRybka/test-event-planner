import { AddEventBtn, AddIcon, FilterBtn, IconFilter, IconFilterList, SectionBtn } from './NavigationHomeBtn.styled';

const NavigationHomeBtn = () => {
  return (
    <SectionBtn>
      <FilterBtn>
        <IconFilter id="icon-filters" width={24} height={24} />
      </FilterBtn>
      <FilterBtn>
        <IconFilterList id="icon-filters-list" width={24} height={24} />
      </FilterBtn>
      <AddEventBtn>
        <AddIcon id="icon-plus" width={24} height={24} />
        {/* Add new event */}
      </AddEventBtn>
    </SectionBtn>
  );
};
export default NavigationHomeBtn;
