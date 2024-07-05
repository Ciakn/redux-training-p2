import React from 'react'
import CakeCounter from './components/CakeCounter'
import { Provider } from 'react-redux'
import store  from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <CakeCounter/>
    </Provider>
  )
}

export default App
