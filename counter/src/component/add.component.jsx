import React, { Component } from 'react';

class Addbutton extends Component {
    state = {  } 
    render() { 
        return (
            <button onClick={this.props.onAddNew} type="button" className="btn btn-success m-4">Add New Button</button>
           
            
        );
    }
}
 
export default Addbutton;