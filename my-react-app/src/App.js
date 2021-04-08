import React from 'react'
import User from './components/User'
import Followers from './components/Followers'

export default function App() {
  return (
    <div className="App">
      <h1>Github User Card</h1>
      <User/>
      <Followers/>
    </div>
  )
}
