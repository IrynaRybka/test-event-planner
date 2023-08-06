import { getEventById, deleteEventById } from 'fakeApi';
import { useParams } from 'react-router-dom';

import {
  ContainerDivEvent,
  ContainerBtn,
  ContainerMain,
  DeleteBtn,
  Description,
  DetailEvent,
  EventBtn,
  EventCategory,
  EventPriority,
  EventTime,
  EventTitle,
  ListCategory,
} from './EventPage.styled';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';

const EventPage = () => {

  const { id } = useParams();
  const event = getEventById(id);

  return (
    <ContainerDivEvent>
      <GoBackBtn/>
      <EventTitle>{event.title}</EventTitle>
      <ContainerMain>
        <img src={event.image} alt="" width={272} height={168} />
        <DetailEvent>
          <Description>{event.description}</Description>
        
        <ListCategory>
          <li>
            <EventCategory>{event.category}</EventCategory>
          </li>
          <li>
            <EventPriority>{event.priority}</EventPriority>
          </li>
          <li>
            <EventCategory>{event.location}</EventCategory>
          </li>
          <li>
            <EventTime>
              {event.date} at {event.time} am
            </EventTime>
          </li>
        </ListCategory>
        <ContainerBtn>
          <EventBtn>Edit</EventBtn>
          <DeleteBtn onClick={() => deleteEventById(event.id)}>Delete event</DeleteBtn>
        </ContainerBtn>
        </DetailEvent>
      </ContainerMain>
    </ContainerDivEvent>
  );
};
export default EventPage;