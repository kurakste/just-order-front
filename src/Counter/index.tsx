import React from 'react'
import { useObserver } from 'mobx-react'
import { StoreContext } from '../Store'

function Counter() {
  const stor = React.useContext(StoreContext);
  return useObserver(() =>
    (
      <div>
        <h1>hello</h1>
        <h2>counter {stor.count}</h2>
        <button onClick={stor.inc}>+</button>
        <button onClick={stor.dec}>-</button>
      </div>
    )
  )
}


export default Counter;