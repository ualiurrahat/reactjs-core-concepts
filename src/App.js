import logo from './logo.svg';
import './App.css';


const number = 10000000000;
const singer = { name: 'mahfuzur rahman', job: 'singer' };
const singer2 = { name: 'eva rahman', job: 'great singer' };
const singerStyle = {
  color: 'blue',
  backgroundColor: 'orange',
  margin:'20px',
  padding:'20px',
 borderRadius:'5px'
};
function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h3>Ajaira component</h3>
      <Singer></Singer>
      <Singer></Singer>
    
    </div>
  );
}

function Person() {
  return (
    <div className='person'>
      <h1>Ualiur Rahat</h1>
      <p>Web Developer</p>
    </div>
  );
}

function Singer()
{
  return (
    <div>
      <p>Number: {number}</p>
      <h2 style={singerStyle}>Singer 1 : {singer.name}</h2>
      <h2 style={singerStyle}>Singer 2 : {singer2.name}</h2>
    </div>
  );
}

export default App;
