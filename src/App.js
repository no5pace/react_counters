import React, {Component} from 'react';
import Header from './components/Header';
import Counters from './components/Counters';
import {v4 as uuidv4} from 'uuid'

class App extends Component {
    state = {
        counters: []
    };

    handleInc = (counter, inc) => {
        let counters = this.state.counters
        if (counters[counters.indexOf(counter)].value !== 0 || inc === 1) {
            counters[counters.indexOf(counter)].value += inc
            this.setState({counters})
        }
    }
    
    handleDel = (counter) => {
        this.setState({counters: this.state.counters.filter(c => c !== counter)})
    };

    handleAddCounter = () => {
        let counters = this.state.counters
        counters = [...counters, {id: uuidv4(), value: 0}]
        this.setState({counters});
    }

    render() {
        return (
            <div className="app">
                <Header length={this.state.counters.length}/>
                <div>
                    <Counters 
                        onInc={this.handleInc} 
                        onDel={this.handleDel} 
                        onAddCounter={this.handleAddCounter} 
                        counters={this.state.counters}
                    />
                </div>
            </div>
        );
    };
};

export default App;