import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = { counters: [{id:1, value: 4},{id:2, value: 44},{id:3, value: 2},{id:4, value: 3}] };
    
    handleReset = () => 
    { let counters = this.state.counters.map( c => { c.value=0; return c });
    this.setState(counters);
};

handleIncrement = counter => 
{

    let countercopy = counter;
    countercopy.value++;
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = countercopy;

    this.setState(counters);
}

    handleDecrement = counter => {

        let countercopy = counter;
        countercopy.value--;
        let counters = [...this.state.counters];
        let index = counters.indexOf(counter);
        counters[index] = countercopy;

        this.setState(counters);
    }

    handleDelete = counterId =>
    { const counters = this.state.counters.filter( c => c.id !== counterId);
this.setState({counters});
}; 
    
    render() { 
        return (  
            <div>
                <nav className="navbar navbar-light bg-light">< a className="navbar-brand" href="#"><h3>NAVIGATION BAR</h3><span className="badge card-header-pills badge-pill "> {this.state.counters.length} </span></a></nav>

                <button className="btn btn-lg btn-success m-3 btn-sm" onClick={this.handleReset}>  Reset</button>
                {this.state.counters.map( counter => 
                {
                   return <Counter key={counter.id} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} counter={counter} />

                }
                )}
            </div>
        );
    }
}
 
export default Counters;