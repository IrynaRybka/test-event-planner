import NavigationHomeBtn from 'components/NavigationHomeBtn/NavigationHomeBtn';
import {
  ContainerDiv,
  ContainerEvents,
  TitleHomePage,
} from './HomePage.styled';
import EventCard from 'components/EventCard/EventCard';
import useMediaQuery from '@mui/material/useMediaQuery';

const HomePage = ({ events }) => {
  const isTablet = useMediaQuery('(min-width: 768px)');

  return (
    <ContainerDiv>
      <NavigationHomeBtn />
      {isTablet ? <TitleHomePage>My events</TitleHomePage> : null}
      <ContainerEvents>
        <EventCard events={events} />
      </ContainerEvents>
    </ContainerDiv>
  );
};
export default HomePage;
