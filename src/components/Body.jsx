import React from 'react'
import { useRef } from 'react'
function Body() {
        const aboutRef = useRef(null)
        const expRef = useRef(null)
        const projectRef = useRef(null)
        const skillRef = useRef(null)
        return (


                <div className='flex h-full w-full flex-col items-end   '>
                        <div ref={aboutRef} id='about' className='h-screen bg-slate-700 w-[50%] '></div>
                        <div ref={expRef} id='experience' className='h-screen bg-cyan-600 w-[50%] '></div>

                        <div id='project' ref={projectRef} className='h-screen bg-purple-500 w-[50%] '></div>
                        <div id='skills' ref={skillRef} className='h-screen bg-green-500 w-[50%] '></div>
                </div >

        )
}

export default Body
