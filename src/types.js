import PropTypes from 'prop-types';

export const personTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  born: PropTypes.number.isRequired,
  died: PropTypes.number.isRequired,
  mother: PropTypes.string,
  father: PropTypes.string,
});
