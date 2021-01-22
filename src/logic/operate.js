import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (numberOne === 'Error') return 'Error';

  const numOne = Big(numberOne);
  const numTwo = Big(numberTwo);

  let result;

  switch (operation) {
    case '%':
      result = numOne.div(100);
      break;
    case '÷':
      result = (numTwo !== 0 ? numOne.div(numTwo) : 'Error');
      break;
    case 'x':
      result = numOne.times(numTwo);
      break;
    case '-':
      result = numOne.minus(numTwo);
      break;
    case '+':
      result = numOne.plus(numTwo);
      break;
    default:
      return 0;
  }
  return result;
};

export default operate;
