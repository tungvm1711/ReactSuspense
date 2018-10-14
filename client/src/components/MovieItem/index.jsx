import React from 'react';

export default class MovieItem extends React.Component {
    constructor() {
        super();
        this.state = {
};

    }

    render() {
    console.log(this.props);
        return (
            <div className="divWrapper">
                <h1>{this.props.title}</h1>
                <p>{this.props.rating}</p>
            </div>
        );
    }
}
