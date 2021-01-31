import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';

const handleClick = () => ({ total: '0', next: '0', operation: '' });

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button value="0" handleClick={handleClick} wide />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('creates a Button component', () => {
    render(<Button value="0" handleClick={handleClick} wide />);
    const element = screen.getByText('0');
    expect(element).toBeInTheDocument();
  });
});
