import React from 'react';

export default class PokeItem extends React.Component {
    render() {
        return (
            <img src={this.props.pokemon.image} alt={this.props.pokemon.name} />
        )
    }
}
