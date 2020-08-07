import React from 'react';
import './App.css';
import request from 'superagent';

export default class DetailPage extends React.Component {

    state = { pokemon: {} }

    componentDidMount = async () => {

        const name = this.props.match.params.myPokemonId;

        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${name}`);

        const pokemonData = data.body.results[0];
        console.log(name);
        this.setState({ pokemon: pokemonData });
    }


    render() {

        const { pokemon } = this.state;

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
