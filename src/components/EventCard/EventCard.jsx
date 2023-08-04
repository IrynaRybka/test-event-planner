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

const EventCard = ({ events }) => {
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
          </NavLink>
        </ContainerEventSection>
      ))}
    </>
  );
};
export default EventCard;
