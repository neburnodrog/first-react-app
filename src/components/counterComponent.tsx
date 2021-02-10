import * as React from 'react';
import { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1,
        tags: ["tag1", "tag2", "tag3", "tag4"]
    };

    render() {
        return (
            <div className="container">
                <div className="row my-3" id="counter">
                    <div className="col">
                        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
                        <button className="btn btn-light btn-sm">Increment</button>
                    </div>
                </div >

                <ul className="row my-3" id="itemsList">
                    {this.state.tags.map(tag => <li className="col-sm" key={tag}>{tag}</li>)}
                </ul>

            </div>
        );
    }

    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
