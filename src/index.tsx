import React from 'react'
import ReactDOM from 'react-dom'

// Components
import App from './App'

// Redux
import store from './redux/store'
import { Provider } from 'react-redux'

// Scss
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
