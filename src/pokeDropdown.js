import React from 'react';

const option = [
    "Name",
    "Type",
    "Attack",
    "Defense"
]

export default class PokeDropdown extends React.Component {

    state = {
        selectedOption: ''
    }

    render() {
        const filterPokemon = this.props.pokeState
        return (
            <div>
                <select onChange={this.props.handleDropdown}>
                    {
                        option.map(filterPokemon => <option key={filterPokemon.pokemon} value={selectedOption}>{selectedOption}</option>)
                    }
                </select>
                {
                    filterPokemon.map(pokemon => <img src={pokemon.url_image} alt={pokemon.pokemon} />)
                }
            </div>
        )
    }
}
