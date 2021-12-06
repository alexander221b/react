import './App.css';
import { Component } from 'react';

function App(props) {
  return (
    <div className="App">
      <p>Funcional: Hola, {props.name}</p>
      <p>{props.children}</p>
    </div>
  );
}

export class ClaseComponente extends Component {
  render(){
    return (
      <div className="App">
        
        <p>Clase: Hola, {this.props.name}</p>

      </div>
    )
  }
}

export default App;
