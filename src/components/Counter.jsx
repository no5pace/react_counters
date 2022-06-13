import React, {Component} from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                <span className="label">{this.props.counter.value}</span>
                <button onClick={() => this.props.onInc(this.props.counter, 1)} className="button">+</button>
                <button onClick={() => this.props.onInc(this.props.counter, -1)} className="button">-</button>
                <button onClick={() => this.props.onDel(this.props.counter)} className="button">Delete</button>
            </div>
        );
    };
};

export default Counter;