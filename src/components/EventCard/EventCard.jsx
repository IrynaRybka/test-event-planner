import { NavLink } from 'react-router-dom';
import {
  ContainerDescription,
  ContainerEventSection,
  ContainerImg,
  Picture,
} from './EventCard.styled';

const EventCard = ({ events }) => {
   return (
    <>
      {events.map(event => (
        <ContainerEventSection
          key={event.id} >
          <NavLink to={`event/${event.id}`}>
            <ContainerImg>
              <Picture src={event.image} alt={event.title} />
            </ContainerImg>
            <ContainerDescription>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </ContainerDescription>
          </NavLink>
        </ContainerEventSection>
      ))}
    </>
  );
};
export default EventCard;
