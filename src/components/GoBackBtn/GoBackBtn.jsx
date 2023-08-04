import { useLocation } from 'react-router-dom';
import { ArrowBack, BackBtn } from './GoBackBtn.styled';

const GoBackBtn = () => {
  const location = useLocation();
  return (
    <BackBtn to={location.state?.from ?? '/'}>
      <ArrowBack id="icon-arrow-left" width={24} height={24} />
      Back
    </BackBtn>
  );
};
export default GoBackBtn;
