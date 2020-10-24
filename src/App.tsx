import React from 'react'

// Components
import Main from './components/Main'
import Navbar from './components/Navbar'

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Main />
    </div>
  )
}

export default App
