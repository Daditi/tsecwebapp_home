import React, { Component } from 'react';
class Counter extends Component {
   
    render() { 
        return (
                <div>
                <span className="m-2">{this.props.counter.value}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">++</button>
                <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">--</button>
          <button onClick={()=> this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">delete</button>
                </div>
          );
    }
}
 
export default Counter;