import { SearchButton, SearchFormElement, SearchIcon, SearchInput } from "./SearchForm.styled";

const SearchForm = () => {
	return (
	<SearchFormElement>
        <SearchButton type="submit">
          <SearchIcon id="icon-search" width={24} height={24} />
        </SearchButton>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search by keywords"
          name="query"
        />
      </SearchFormElement>);
}
export default SearchForm;