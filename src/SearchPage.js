import React from 'react';
import './App.css';
import request from 'superagent';
import PokeList from './PokeList.js';

export default class SearchPage extends React.Component {
    state = {
        search: '',
        isLoading: false,
        pokeState: [],
        searchBy: 'pokemon',
        currentPage: 1,
        totalPages: 1
    }

    componentDidMount = async () => {

        console.log(this.props);

        const params = new URLSearchParams(this.props.location.search);
        const searchBy = params.get('searchBy');
        const page = params.get('page');
        const search = params.get('search');

        console.log(search, page, searchBy);

        if (searchBy && page && search) {
            await this.setState({
                searchBy: searchBy,
                currentPage: page,
                search: search
            });
        }
    }

    makeRequest = async () => {
        this.setState({ isLoading: true })
        console.log(this.state);
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.currentPage}&perPage=20&${this.state.searchBy}=${this.state.search}`);

        this.setState({
            pokeState: data.body.results,
            totalPages: Math.ceil(data.body.count / 20),
            isLoading: false
        })
        const params = new URLSearchParams(this.props.location.search);

        params.set('search', this.state.search);
        params.set('searchBy', this.state.searchBy);
        params.set('page', this.state.currentPage);

        this.props.history.push('?', + params.toString())
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await this.setState({
            currentPage: 1
        })
        await this.makeRequest();
    }

    handleNextClick = async () => {
        await this.setState({ currentPage: Number(this.state.currentPage) + 1 })

        await this.makeRequest();
    }

    handleBackClick = async () => {
        await this.setState({ currentPage: Number(this.state.currentPage) - 1 })

        await this.makeRequest();
    }

    render() {

        const { pokeState, isLoading, currentPage, totalPages } = this.state;

        return (
            <main>
                <section>
                    <form onSubmit={this.handleSubmit}>
                        <p className="prompt">
                            What Pokemon do you want to catch?
                            </p>
                        <input onChange={(e) => { this.setState({ search: e.target.value }) }} value={this.state.search} />
                        <select onChange={(e) => { this.setState({ searchBy: e.target.value }) }} value={this.state.searchBy}>
                            <option value='pokemon'>Name
                            </option>
                            <option value='type_1'>Type
                            </option>
                            <option value='attack'>Attack
                            </option>
                            <option value='defense'>Defense
                            </option>
                        </select>
                        <button onClick={this.handleClick}>Catch Pokemon!</button>
                    </form>
                </section>
                <section>
                    {
                        isLoading ?
                            <h1 className="loading">Loading</h1> :
                            <PokeList handleNextClick={this.handleNextClick} handleBackClick={this.handleBackClick} currentPage={currentPage} pokeState={pokeState} totalPages={totalPages} />
                    }
                </section>
            </main>
        );
    }
}
