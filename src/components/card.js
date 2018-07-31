import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

    constructor() {
        super()

        this.state = {
            color: 'BLUE',
            pluralNoun: ''
        }

        this.handleInputChange= this.handleInputChange.bind(this);
    }

    handleInputChange() {
        console.log('this is the value')
        this.setState({color: 'red' })
    }

    render() {

        return (
            <div className="card">
            <h1>{this.state.color}</h1>
            <input onChange={this.handleInputChange}/>
            </div>
        )

        return (
            <div className="card">
                { Input('Color') }
                { Input('Plural Noun') }
            </div>
        )
    }
}
ame="card">
                { Input('Color') }
                { Input('Plural Noun') }
            </div>
        )
    }
}

export default Card;