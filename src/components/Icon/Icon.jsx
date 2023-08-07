import PropTypes from 'prop-types';
import sprite from '../../assets/icons/icons.svg';

export const Icon = ({ id, ...prop }) => {
  return (
    <svg {...prop}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  anyProp: PropTypes.any,
};
