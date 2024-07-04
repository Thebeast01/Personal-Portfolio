import React from 'react'
import LeftNav from './components/LeftNav'
import Body from './components/Body'
const App = () => {
  return (
    <div className='bg-background  flex justify-between overflow-y-auto '>
      <LeftNav />
      <Body />
    </div>
  )
}

export default App
