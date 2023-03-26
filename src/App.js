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
      <Person name="rahat" prof="web developer"></Person>
      <Person name="shohan" prof="Goat developer"></Person>
      <Person name="minul" prof="Goat Wordpress developer"></Person>
      <h3>Ajaira component</h3>
      <Singer phone ="01888" name = {singer.name}></Singer>
      <Singer phone = "0179799" name = {singer2.name}></Singer>
     
    
    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.prof}</p>
    </div>
  );
}

function Singer(props)
{
  return (
    <div style={singerStyle}>
      <p>Number: {number}</p>
      <h2>Singer : {props.name}</h2>
      <p>Phone: {props.phone}</p>
    </div>
  );
}

export default App;
