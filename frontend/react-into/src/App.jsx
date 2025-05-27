import React, { useState } from 'react';

const Greet = (props) => {
  const { name } = props;
  return <h1>{name}</h1>;  
};

const App = () => { // <-- Move useState here

  return (
    <div>
      <Greet name="John" />
      <Quote text="The only limit to our realization of tomorrow is our doubts of today." author="Franklin D. Roosevelt" />
      <Quotes />
    </div>
  );
}

const Quotes = () => {
   const [quotes, setQuote] = useState([
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Life is what happens when you're busy making other plans." ,
    "Get busy living or get busy dying."
   ]);

  return (
    <div>
      <h2>
        {
        quotes.map((quote, index) => (
          <Quote key={index} text={quote} author="Prabesh" />
        ))
        }
      </h2>
    </div>
  );
}

const Quote = ({ text, author }) => {
  return (
    <div>
      <p>{text}</p>
      <p>- {author}</p>
    </div>
  );
}

export default App;