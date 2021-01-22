import operate from './operate';

const calculate = (data, buttonName) => {
  let { total = '', next = '', operation = '' } = data;
  switch (buttonName) {
    case 'AC':
      total = '';
      next = '';
      operation = '';
      break;
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '.':
      if (operation === '' || !operation) { total = `${total}${buttonName}`; } else next = `${next}${buttonName}`;
      break;
    case '=':
      return { total: operate(total, next, operation), next: '', operation: '' };
    default:
      operation = buttonName;
      break;
  }
  return { total, next, operation };
};

export default calculate;
