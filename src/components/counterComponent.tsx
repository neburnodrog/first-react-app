import * as React from 'react';
import { Component } from 'react';

type CounterProps = {
    value: number;
    selected: boolean;
}

class Counter extends Component<CounterProps, {}> {
    state = {
        count: 0,
        tags: [],
    };

    render() {
        return (
            <div className="container">
                <div className="row my-3" id="counter">
                    <div className="col">
                        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
                        <button onClick={() => this.handleIncrement()} className="btn btn-light btn-sm">Increment</button>
                    </div>
                </div >

                <ul className="row my-3" id="itemsList">
                    {this.state.tags.length === 0 && "Please create a new tag!"}
                    {this.renderTags()}
                </ul>

            </div >
        );
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return this.state.tags.map(tag => <li className="col-sm" key={tag} > {tag}</li>);
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }

}

export default Counter;
