import NavigationHomeBtn from "components/NavigationHomeBtn/NavigationHomeBtn";
import { ContainerDiv } from "./HomePage.styled";
import EventCard from "components/EventCard/EventCard";

const HomePage = () => {
  return (
    <ContainerDiv>
        {/* <h1>My events</h1> */}
        <NavigationHomeBtn/>
        <EventCard/>
    </ContainerDiv>
  );
};
export default HomePage;