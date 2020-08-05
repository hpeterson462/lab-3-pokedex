import React from 'react';

export default class PokeList extends React.Component {
    render() {
        return (
            <div>
                {this.props.pokemon.map(poke => <p>{poke.name}</p>)
                }
            </div>
        )
    }
}