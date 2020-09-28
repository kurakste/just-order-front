import React from 'react'
import { useLocalStore } from 'mobx-react'

const StoreContext = React.createContext({
  count: 0,
  inc: () => {return},
  dec: () => {return}
})

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    count: 0,
    inc: () => { 
      store.count++ 
      console.log('store inc', store.count)
    },
    dec: () => { 
      store.count--
      console.log('decrement', store.count)
    }
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}

export  {
  StoreContext,
  StoreProvider
}


