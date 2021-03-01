import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/css/app.css';
import calculate from '../logic/calculate';
import Nav from './Nav';

const App = () => {
  const [state, setState] = useState({ total: '', next: '', operation: '' });

  const handleClick = buttonName => {
    setState(state => calculate(state, buttonName));
  };

  return (
    <>
      <Nav />
      <div className="app">
        <Display result={`${state.total}${state.operation}${state.next}`.replace(/null/g, '')} />
        <ButtonPanel handleClick={handleClick} />
      </div>
    </>
  );
};

export default App;
