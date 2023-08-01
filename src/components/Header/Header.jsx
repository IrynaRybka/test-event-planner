import { Icon } from 'components/Icon/Icon';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <NavLink to="/">Event Planner</NavLink>
      <form>
        <button type="submit">
          <Icon id="icon-search" width={24} height={24} />
        </button>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search by keywords"
          name="query"
        />
      </form>
      <button>
        UK
        <Icon id="icon-chevron-down" width={24} height={24} />
      </button>
    </header>
  );
};
export default Header;
