import logo from './logo.svg';
import './App.css';



const singer = { name: 'mahfuzur rahman', job: 'singer' };
const singer2 = { name: 'eva rahman', job: 'great singer' };
const singerStyle = {
  color: 'blue',
  backgroundColor: 'orange',
  margin: '20px',
  padding: '20px',
  borderRadius: '5px'
};
const friends = [{ name: "naeem", job: "electrical engineer", home: "chattagam" },
{ name: "shohan", job: "full stack developer", home: "pabna" },
{ name: "minul", job: "G.O.A.T Freelance Developer", home: "bagerhat" }];
function App() {
  const nayoks = ["shahrukh", "salman", "aamir"];
  return (
    <div className="App">
      {/* <Person name={nayoks[0]} prof="web developer"></Person>
      <Person name={nayoks[1]} prof="Goat developer"></Person>
      <Person name={nayoks[2]} prof="Goat Wordpress developer"></Person> */
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      {
        friends.map(friend => <Person name={friend.name} prof = {friend.job}></Person>)
      }


      <h3>Ajaira component</h3>
      <Singer phone="01888" name={singer.name}></Singer>
      <Singer phone="0179799" name={singer2.name}></Singer>


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

function Singer(props) {
  return (
    <div style={singerStyle}>

      <h2>Singer : {props.name}</h2>
      <p>Phone: {props.phone}</p>
    </div>
  );
}

export default App;
