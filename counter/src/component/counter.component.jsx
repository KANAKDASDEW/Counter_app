import React, { Component } from 'react';
class Counter extends Component {
    
     formatCount = () =>{
         if(this.state.counter === 0) return 'Zero';
         return this.state.counter;
     }

    render() { 
        return (
            <>
            <ul>
                <li class = "list-unstyled">
                    <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button"  style={{ height: 60, width: 60, }}  class="btn btn-primary m-3">{this.props.value}</button>
                    <button  onClick={()  => this.props.onIncrement(this.props.id)} type="button" style={{ height: 60, width: 60}} class="btn btn-secondary m-3">+</button>
                    <button  onClick={()  => this.props.onDecrement(this.props.id)} type="button" style={{ height: 60, width: 60}}  class="btn btn-secondary m-3">-</button>
                    <button  onClick={()  => this.props.onDelete(this.props.id)} type="button"style={{  textAlign:'center'}}  class="btn btn-outline-danger m-3">Delete</button>
                    <button  onClick={()  => this.props.onResetOne(this.props.id)} type="button"style={{ textAlign:'center'}}  class="btn btn-outline-info m-3">Reset</button>
                </div>

                </li>
                
            </ul>
  </>
        );
    }
}
 
export default Counter;