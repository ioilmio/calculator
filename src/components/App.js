import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/css/app.css';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const calculator = calculate(this.state, buttonName);
    this.setState(calculator);
  }

  render() {
    const { total, next, operation } = this.state;
    return (

      <div className="app">
        <Display result={`${total}${operation}${next}`.replace(/null/g, '')} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
