import React from 'react';
import './App.css';
import request from 'superagent';

export default class App extends React.Component {

  state = {
    search: '',

    pokeState: []
  }

  handleDropdown = (e) => {
    const selectedOption = e.target.value;
    this.setState({ selectedOption })
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
          <p className="search-bar">
            <div className="prompt">
              What Pokemon do you want to catch?
              </div>
            <input onChange={(e) => this.setState({ search: e.target.value })} />
            <button onClick={this.handleClick}>Catch Pokemon!</button>
          </p>
          {
            this.state.isLoading
          }

          {
            this.state.pokeState.map(poke => <div key={poke.pokemon}>
              <p>{poke.pokemon} </p>
              <img src={poke.url_image} alt={poke.pokemon} />
            </div>)
          }

        </header>
      </div >
    );
  }
}