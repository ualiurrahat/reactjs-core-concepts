import logo from './logo.svg';
import './App.css';


const number = 10000000000;
const singer = {name:'mahfuzur rahman', job:'singer'};
const singer2 = {name:'eva rahman', job:'great singer'};
const singerStyle = {
  color:'red',
  backgroundColor:'white'
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Let's explore REACT</h3>
        </div>
        <div className="singer">
          <p>Number: {number}</p>
          <p style = {singerStyle}>Singer 1: {singer.name} {singer.job}</p>
          <p style = {{color:'blue', backgroundColor:'white'}}>Singer 2: {singer2.name} {singer2.job}</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
