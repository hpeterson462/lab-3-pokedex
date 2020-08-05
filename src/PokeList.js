import React from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends React.Component {
    render() {
        return (
            <div>
                {this.props.pokemon.map((poke) => <PokeItem key={poke.pokemon} image={poke.image} />)
                }
            </div>
        )
    }
}