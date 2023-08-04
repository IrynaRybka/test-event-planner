import NavigationHomeBtn from "components/NavigationHomeBtn/NavigationHomeBtn";
import { ContainerDiv, TitleHomePage } from "./HomePage.styled";
import EventCard from "components/EventCard/EventCard";
import { useEffect } from "react";
import { useState } from "react";


const HomePage = ({events}) => {
  const [isTablet, setIsTablet] = useState(false); 

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    setIsTablet(query.matches);
  }, []);

  return (
    <ContainerDiv>
        <NavigationHomeBtn/>
        {isTablet ? <TitleHomePage>My events</TitleHomePage> : null}
        <EventCard events={events}/>
    </ContainerDiv>
  );
};
export default HomePage;