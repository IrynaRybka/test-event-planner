import NavigationHomeBtn from "components/NavigationHomeBtn/NavigationHomeBtn";
import { ContainerDiv } from "./HomePage.styled";

const HomePage = () => {
  return (
    <ContainerDiv>
        <h1>My events</h1>
        <NavigationHomeBtn/>
    </ContainerDiv>
  );
};
export default HomePage;