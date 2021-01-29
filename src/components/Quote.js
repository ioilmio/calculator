import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import '../styles/css/quote.css';

const Quote = () => {
  const [quote, setQuote] = useState();
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const data = await fetch('https://type.fit/api/quotes');
      const response = await data.json();
      const rand = Math.floor(Math.random() * 100);
      setQuote(response[rand].text);
      setLoading(false);
    } catch (err) {
      setQuote(err);
    }
  };
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <main>
      <Nav />
      <div className="quote">
        <p>
          {loading ? 'Loading...' : quote}
        </p>
      </div>
    </main>
  );
};

export default Quote;
