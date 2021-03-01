import React from 'react';
import Nav from './Nav';
import '../styles/css/home.css';

const Home = () => (
  <main>
    <Nav />
    <div className="outer-container">
      <div className="home">
        <h2>Welcome to Math-magicians!!!</h2>
        <p>
          You can use this Application to make calculations or to have the quote of the day
        </p>
      </div>
    </div>
  </main>
);

export default Home;
