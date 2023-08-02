import { ContainerDescription, ContainerEventSection, ContainerImg} from './EventCard.styled';
// import business from '../../assets/images/Rectangle-3des.jpg';

const EventCard = () => {
  return (
    <ContainerEventSection>
      <ContainerImg>
        {/* <Picture src={business} alt="event" /> */}
      </ContainerImg>
	  <ContainerDescription>
      <h3>Leadership Conference</h3>
      <p>
        Unlock the secrets of effective leadership at our transformative Success
        Leadership Conference.
      </p>
	  </ContainerDescription>
    </ContainerEventSection>
  );
};
export default EventCard;
