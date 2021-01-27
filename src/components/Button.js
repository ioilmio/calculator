import React from 'react';
import PropTypes from 'prop-types';
import '../styles/css/button.css';

const Button = ({
  value, color, wide, handleClick,
}) => {
  const wideClass = wide ? `${color} wide` : `${color}`;
  return (
    <button type="button" className={wideClass} onClick={() => handleClick(value)}>{value}</button>
  );
};
Button.propTypes = {
  value: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = { color: 'orange' };

export default Button;
