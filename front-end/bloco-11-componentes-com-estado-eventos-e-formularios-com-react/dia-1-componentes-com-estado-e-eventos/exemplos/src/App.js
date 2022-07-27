import './App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.displayLorrayne = this.displayLorrayne.bind(this)
    this.displayLorrayne2 = this.displayLorrayne2.bind(this)
    this.displayLorrayne3 = this.displayLorrayne3.bind(this.state)
  }

  setButtonColor = (clicks) => clicks % 2 === 0 ? 'green' : 'white'

  displayLorrayne() {
    this.setState((estadoAnterior, _props) => (
      
      {
      numeroDeCliques: estadoAnterior.numeroDeCliques +1
    }))
    console.log(this.setButtonColor(this.state.numeroDeCliques - 1))
  }
  displayLorrayne2 = () => console.log(this)
  displayLorrayne3 = () => console.log (this)
  
  render() {


    return (
      <div>
        <button onClick={this.displayLorrayne} style={{backgroundColor: this.setButtonColor(this.state.numeroDeCliques)}}> {this.state.numeroDeCliques} </button>
        <button onClick={this.displayLorrayne2}> lorrayners </button>
        <button onClick={this.displayLorrayne3}> lorraynelson </button>
      </div>
    );
  }}

export default App;
