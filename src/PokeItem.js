import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export default class PokeItem extends React.Component {
    render() {

        const { pokemon } = this.props;

        return (
            <Link to={`/detail/${pokemon}`}>
                <p>{pokemon.pokemon}</p>
                <img src={pokemon.url_image} alt={pokemon.pokemon} />
            </Link>
        )
    }
}
