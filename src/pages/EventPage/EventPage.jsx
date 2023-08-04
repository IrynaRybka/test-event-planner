import { getEventById, deleteEventById } from 'fakeApi';
import { useParams } from 'react-router-dom';
import { ContainerDiv } from '../HomePage/HomePage.styled';
import {
  ContainerBtn,
  ContainerMain,
  DeleteBtn,
  Description,
  DetailEvent,
  EventBtn,
  EventCategory,
  EventPriority,
  EventTime,
  ListCategory,
} from './EventPage.styled';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';

const EventPage = () => {

  const { id } = useParams();
  const event = getEventById(id);

  return (
    <ContainerDiv>
      <GoBackBtn/>
      <h2>{event.title}</h2>
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
              {event.data} at {event.time} am
            </EventTime>
          </li>
        </ListCategory>
        <ContainerBtn>
          <EventBtn>Edit</EventBtn>
          <DeleteBtn onClick={() => deleteEventById(event.id)}>Delete event</DeleteBtn>
        </ContainerBtn>
        </DetailEvent>
      </ContainerMain>
    </ContainerDiv>
  );
};
export default EventPage;
