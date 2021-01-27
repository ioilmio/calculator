import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (numberOne === 'Error') return 'Error';

  let result;

  switch (operation) {
    case '%':
      result = Big(numberOne).div(100);
      break;
    case '÷':
      result = (Big(numberTwo) !== 0 ? Big(numberOne).div(Big(numberTwo)) : 'Error');
      break;
    case 'x':
      result = Big(numberOne).times(Big(numberTwo));
      break;
    case '-':
      result = Big(numberOne).minus(Big(numberTwo));
      break;
    case '+':
      result = Big(numberOne).plus(Big(numberTwo));
      break;
    case '+/-':
      result = Big(numberOne).times(-1);
      break;
    default:
      return 0;
  }
  return result;
};

export default operate;
