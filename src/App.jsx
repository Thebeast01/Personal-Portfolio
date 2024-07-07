import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import LeftNav from './components/LeftNav'
import Body from './components/Body'
import { ssrModuleExportsKey } from 'vite/runtime'
import Cursor from './components/cursor/Cursor'
const App = () => {

  return (
    <div className=' bg-gradient-to-br from-background2 to to-background   flex justify-between overflow-y-auto '>

      <Cursor />
      <LeftNav />
      <Body />

    </div>
  )
}

export default App
