import React from 'react';

export default class PokeItem extends React.Component {
    render() {
        return (
            <p>{this.props.pokemon}</p>
        )
    }
}
