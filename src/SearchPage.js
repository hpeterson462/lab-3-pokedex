import React from 'react';
import './App.css';
import request from 'superagent';
import PokeDropdown from './PokeDropdown.js';
import PokeItem from './PokeItem.js';

export default class SearchPage extends React.Component {

    state = {
        search: '',
        isLoading: false,
        pokeState: [],
        selectedOption,

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

        const { pokeState, isLoading } = this.state;

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
                        isLoading ? <p>Loading</p> : pokeState.map(poke => <PokeItem)
                    }
                    <PokeDropdown pokeState={this.state.pokeState} />
                    {
                        pokeState.map(poke => <div key={poke.pokemon}>
                            <p>{poke.pokemon} </p>
                            <img src={poke.url_image} alt={poke.pokemon} />
                        </div>)
                    }

                </header>
            </div >
        );
    }
}