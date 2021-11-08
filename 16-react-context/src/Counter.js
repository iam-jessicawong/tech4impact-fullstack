import React from 'react';

import { useCount } from './CountContext';

const Counter = () => {
  // set dispatch and state count from useCount()
  const { dispatch, state } = useCount()

  const onInc = () => {
    dispatch({ type: 'increment', state })
  }

  const onDec = () => {
    dispatch({ type: 'decrement', state })
  }

  return (
    <>
      {/* change 0 with count from context */}
      Count: { state.count }
      <div>
        {/* use dispatch for onClick method */}
        <button className="count-button" onClick={() => { onInc() }} >+</button>
        <button className="count-button" onClick={() => { onDec() }}>-</button>
      </div>
    </>
  );
}

export default Counter;