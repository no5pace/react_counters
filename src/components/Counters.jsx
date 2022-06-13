import React, {Component} from 'react';
import Counter from './Counter';

class Counters extends Component {
    render() {
        return (
            <div className="counters">
                <button onClick={this.props.onAddCounter} className="button">Add Counter</button>
                {this.props.counters.map(counter => {
                    return <Counter
                        key={counter.id}
                        counter={counter}
                        onInc={this.props.onInc}
                        onDel={this.props.onDel}
                    />
                })}
            </div>
        );
    };
};

export default Counters;