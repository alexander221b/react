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

export class Contador extends Component{
  constructor (props){
    super(props);
    this.state = {
       contador: 0
    };
  }

  /* setState es usado para modificar el valor del estado contador*/
  aumentar = () => { 
    this.setState({
      contador: this.state.contador + 1
    })
  };
  
  render(){
    return (
      <div className="App">
        <p>{this.state.contador}</p>
         <button onClick={this.aumentar}>Aumentar</button>
      </div>
    )
  }
}

export default App;
