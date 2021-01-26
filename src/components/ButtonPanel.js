import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/css/buttonPanel.css';

const ButtonPanel = ({ handleClick }) => {
  const group1 = ['AC', '+/-', '%', '÷'];
  const group2 = ['7', '8', '9', 'x'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];
  const groups = [group1, group2, group3, group4, group5];
  return (
    <div id="button-panel">
      {groups.map(group => (
        <div className="row" key={group}>
          {group.map(btn => (
            <Button
              handleClick={handleClick}
              key={btn}
              value={`${btn}`}
              color={['+', '-', 'x', '÷', '='].includes(btn) ? 'orange' : ''}
              wide={btn === '0'}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default ButtonPanel;
