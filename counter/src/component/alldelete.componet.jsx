import React, { Component } from 'react';

class Alldelete extends Component {
    state = {  } 
    render() { 
        return (
            <button onClick={this.props.onDelete} type="button" className="btn btn-danger m-4">All delete</button>
        
        );
    }
}
 
export default Alldelete;