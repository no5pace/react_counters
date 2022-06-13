import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="banner">
                <h1 className="header">Counters!</h1>
                <h4 className="header">(there are {this.props.length})</h4>
            </div>
        );
    };
};

export default Header;
