import React from 'react';
import './App.css';
import request from 'superagent';

export default class DetailPage extends React.Component {

    state = { pokemon: {} }

    componentDidMount = async () => {

        const id = this.props.match.params.myPokemonId;

        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${id}`);

        const pokemonData = data.body.results[0];

        this.setState({ pokemon: pokemonData });
    }


    render() {

        const { pokemon } = this.state;
        console.log(this.state);
        return (
            <>
                {
                    pokemon ?
                        <div>
                            <p>{pokemon.pokemon}</p>
                            <p>Defense: {pokemon.defense}</p>
                            <p>Attack: {pokemon.attack}</p>
                            <img src={pokemon.url_image} alt={pokemon.pokemon} />
                        </div> :
                        <h1>Loading</h1>

                }
            </>
        )
    }
}
