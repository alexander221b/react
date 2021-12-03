import './App.css';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <p>Hola mundo</p>
    </div>
  );
}

export class ClaseComponente extends Component {
  render(){
    return <p className="align-center">Hola mundo</p>;
  }
}

export default App;
