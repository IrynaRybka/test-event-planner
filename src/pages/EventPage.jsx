import { NavLink, useLocation } from 'react-router-dom';

const EventPage = () => {
  const location = useLocation();
    return (
      <div>
 <NavLink to={location.state?.from ?? '/'}>
        Go Back
      </NavLink>
      EventPage
      </div>
    );
  };
  export default EventPage;