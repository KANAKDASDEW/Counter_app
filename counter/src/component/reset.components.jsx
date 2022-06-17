import React, { Component } from 'react';

class Reset extends Component {
    state = {  } 
    render() { 
        return (
            <button onClick={this.props.onReset} type="button" className="btn btn-warning m-4">All Reset</button>
        );
    }
}
 
export default Reset;