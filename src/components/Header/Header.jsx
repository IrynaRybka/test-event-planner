import { HeaderContainer, LogoLink } from './Header.styled';
import SearchForm from './SearchForm/SearchForm';
import Translate from './Translate/Translate';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoLink to="/">Event Planner</LogoLink>
      <SearchForm/>
      <Translate/>
    </HeaderContainer>
  );
};
export default Header;
