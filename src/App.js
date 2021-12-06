import './App.css';
import { Component } from 'react';

function App(props) {
  return (
    <div class
    Name="App">
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


export class Formulario extends Component{
  
  constructor (props){
    super(props);
    this.state = {
      email : 'dasd@dasd.com',
      password: 'adasd'
    }
  }

  syncChanges(value, property){
    let state = {};
    state[property] = value;
    this.setState(state);
  }




submitForm = () => {
  console.log(this.state);
}

  render (){
    return (
      <form >
        <input 
          onChange = {(evento) => { this.syncChanges(evento.target.value, 'email') } }
          type="email" 
          value={this.state.email}  
          placeholder="Email">
        </input>
        <input 
          onChange = {(evento) => { this.syncChanges(evento.target.value, 'password') } }
          type="password" 
          value={this.state.password} 
          placeholder="Pasword">        
        </input>
        <input 
          onClick = {this.submitForm}
          type="submit" 
          value="Iniciar Sesión"></input>
      </form>
    )
  }

}

export default App;
