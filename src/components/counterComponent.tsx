import * as React from 'react';
import { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1,
        tags: ["tag1", "tag2", "tag3"]
    };

    render() {
        return (
            <div className="row" id="counter">
                <span className={this.getBadgeClass()}>{this.formatCount()}</span>
                <button className="btn btn-dark">Increment</button>
            </div >
        );
    }

    getBadgeClass() {
        let classes = "col badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
