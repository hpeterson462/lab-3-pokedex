import React from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends React.Component {
    render() {

        const { pokeState, handleNextClick, handleBackClick, currentPage, totalPages } = this.props;
        console.log(currentPage);
        return (
            <div>
                {
                    pokeState.length > 0 &&
                    <div>
                        {
                            Number(currentPage) !== 1 &&
                            <button onClick={handleBackClick}>Back</button>
                        }
                        {
                            Number(currentPage) !== Number(totalPages) &&
                            <button onClick={handleNextClick}>Next</button>
                        }
                        {currentPage} of {totalPages}
                    </div>
                }

                <div className="pokemon-display">
                    {pokeState.map(pokemon => <PokeItem pokemon={pokemon} key={pokemon.pokemon} image={pokemon.url_image} />)}
                </div>
            </div >
        )
    }
}