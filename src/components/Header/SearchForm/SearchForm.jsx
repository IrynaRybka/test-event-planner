// import { useSearchParams } from "react-router-dom";
import { SearchButton, SearchFormElement, SearchIcon, SearchInput } from "./SearchForm.styled";

const SearchForm = ({value, onChange}) => {

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
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </SearchFormElement>);
}
export default SearchForm;