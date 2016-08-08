import React from 'react';
const PropTypes = React.PropTypes;
const Counter = ({value, onIncrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
  </div>
);
Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired
};
module.exports = Counter;
