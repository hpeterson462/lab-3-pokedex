import React from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends React.Component {
    render() {

        const { pokeState, handleNextClick, handleBackClick, currentPage } = this.props;

        return (
            <div>
                {
                    pokeState.length > 0 &&
                    <div>
                        {
                            currentPage !== totalPages &&
                            <button
                                onClick={handleNextClick}>Next</button>
                        }
                        {
                            currentPage !== 1 &&
                            <button onClick={handleBackClick}>Back</button>
                        }
                        {currentPage} of {totalPages}
                    </div>
                }
                {
                    <div className="pokemonDisplay">
                        pokeState.map((poke) => {<PokeItem pokemon={poke.pokemon} key={poke.pokemon} image={poke.url_image} />)
                    </div>
                }
            </div >
        )
    }
}