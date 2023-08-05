import { NavLink } from 'react-router-dom';
import {
  ContainerDescription,
  ContainerEventSection,
  ContainerImg,
  DescriptionEvent,
  ElementListDate,
  ListCategory,
  ListCategoryElement,
  ListDate,
  TitleEvent,
} from './EventCard.styled';
import { useMediaQuery } from '@mui/material';

const EventCard = ({ events }) => {
  const isTablet = useMediaQuery('(min-width: 768px)');
  return (
    <>
      {events.map(event => (
        <ContainerEventSection key={event.id}>
          <NavLink to={`event/${event.id}`}>
            <ContainerImg
              style={{ backgroundImage: `url(${event.image})` }}
            ></ContainerImg>
            <ContainerDescription>
              <TitleEvent>{event.title}</TitleEvent>
              <DescriptionEvent>{event.description}</DescriptionEvent>
            </ContainerDescription>
            <ListCategory>
              <ListCategoryElement>
                <p>{event.category}</p>
              </ListCategoryElement>
              <ListCategoryElement>
                <p>{event.priority}</p>
              </ListCategoryElement>
            </ListCategory>
            <ListDate>
              <ElementListDate>
                <p>
                  {event.date} at {event.time}
                </p>
              </ElementListDate>
              <ElementListDate>
                <p>{event.location}</p>
              </ElementListDate>
            </ListDate>
            {isTablet ? <button>More info</button> : null}
          </NavLink>
        </ContainerEventSection>
      ))}
    </>
  );
};
export default EventCard;
