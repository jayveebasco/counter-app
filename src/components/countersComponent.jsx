import React, { Component } from 'react';
import Counter from './counterComponent';

class Counters extends Component {
  render() { 
    const { onReset, counters, onDelete, onIncrement, onDecrement, onSingleReset } = this.props;

    return ( 
      <div>
        <button className="btn btn-primary bnt-sm m-2" onClick={onReset}>Reset All</button>
        {counters.map(counter => (
          <Counter 
            key={counter.id} 
            onDelete={onDelete} 
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onSingleReset={onSingleReset}
            counter={counter}/>
          ))}
      </div>
    );
  }
}
 
export default Counters;