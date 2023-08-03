// import { useSearchParams } from 'react-router-dom';
import { HeaderContainer, LogoLink } from './Header.styled';
import SearchForm from './SearchForm/SearchForm';
import Translate from './Translate/Translate';
// import {getEvents} from '../../fakeApi';

const Header = ({value, onChange}) => {

  return (
    <HeaderContainer>
      <LogoLink to="/">Event Planner</LogoLink>
      <SearchForm value={value} onChange={onChange}/>
      <Translate/>
    </HeaderContainer>
  );
};
export default Header;
