import React, { Component } from 'react';

class App extends Component {
  state = {
    loading: true,
    poke: []
  }

  async componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({poke: data.results, loading: false})
  }

  render() {
    return (
     <div>
       {this.state.poke.map(poke => (
         <div key={poke.url}>
          <div>{poke.name}</div>
         </div>
       ))}
     </div>
    );
  }
}


export default App;