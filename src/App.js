import React from 'react';
import './App.css';
import request from 'superagent';

export default class App extends React.Component {

  state = {
    search: '',
    isLoading: false,
    pokeState: []
  }

  handleClick = async () => {
    this.setState({ isLoading: true })

    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.search}`);

    this.setState({
      pokeState: data.body.results,
      isLoading: false
    })
  }

  handlePokeType = (e) => {
    const type = e.target.value;

    this.setState({ filter: type })
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <input onChange={(e) => this.setState({ search: e.target.value })} />
          <button onClick={this.handleClick}>Catch Pokemon!</button>
        </header>
        {
          this.state.pokeState.map(poke => <p>{poke.pokemon} : {poke.image} </p>)
        }
      </div >
    );
  }
}