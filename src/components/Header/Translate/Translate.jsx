import { TranslateBtn, TranslateIconArrow, TranslateText } from './Translate.styled';

const Translate = () => {
  return (
    <TranslateBtn>
      <TranslateText>UK</TranslateText>
      <TranslateIconArrow id="icon-chevron-down" width={24} height={24} />
    </TranslateBtn>
  );
};
export default Translate;
