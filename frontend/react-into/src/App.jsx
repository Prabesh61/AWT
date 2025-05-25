const Greet = (props) => {
  const { name } = props;
  return <h1>{name}</h1>;  
};


const App = () => {
  return (
    <div>
      <Greet name="John" />
      <Quote text="The only limit to our realization of tomorrow is our doubts of today." author="Franklin D. Roosevelt" />
    </div>
  );
}

const Quote = ({text,author}) => {
  return (
    <div>
      <p>{text}</p>
      <p>- {author}</p>
    </div>
  );
}
export default App;
