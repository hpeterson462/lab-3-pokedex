import React from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends React.Component {
    render() {
        return (
            <div>
                {this.props.pokeState.map((poke) => <PokeItem key={poke.pokemon} image={poke.url_image} />)
                }
            </div>
        )
    }
}