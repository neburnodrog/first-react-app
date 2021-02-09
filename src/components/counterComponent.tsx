import * as React from 'react';
import { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    };

    styles = {
        fontSize: 20,
        fontWeight: 600,
    };

    render() {
        return (
            <React.Fragment>
                <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-primary">Increment</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
