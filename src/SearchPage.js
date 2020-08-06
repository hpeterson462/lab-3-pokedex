import React from 'react';
import './App.css';
import request from 'superagent';
import PokeItem from './PokeItem.js';

export default class SearchPage extends React.Component {
    state = {
        search: '',
        isLoading: false,
        pokeState: [],
        searchBy: 'pokemon'
    }

    handleClick = async () => {
        this.setState({ isLoading: true })

        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchBy}=${this.state.search}`);

        this.setState({
            pokeState: data.body.results,
            isLoading: false
        })
    }

    handleTextInput = (e) => {
        const pokemon = e.target.value;

        this.setState({ filter: pokemon })
    }

    handleDropdown = (e) => {
        const type = e.target.value;

        this.setState({ filter: type })
    }

    render() {

        const { pokeState, isLoading } = this.state;

        return (
            <>
                <div className="App-div">
                    <section className="search-bar">
                        <div className="prompt">
                            What Pokemon do you want to catch?
                        </div>
                        <input onChange={this.handleTextInput} />
                    </section>
                    <select onChange={this.handleDropdown} >
                        <option value="pokemon">Name
                            </option>
                        <option value="type">Type
                            </option>
                        <option value="attack">Attack
                            </option>
                        <option value="defense">Defense
                            </option>
                    </select>
                    <button onClick={this.handleClick}>Catch Pokemon!</button>
                    {
                        isLoading ? <h1>Loading</h1> : pokeState.map(poke => <PokeItem pokemon={poke} />)
                    }
                </div >
            </>
        );
    }
}