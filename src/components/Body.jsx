import About from './about/About'

function Body() {
        return (


                <div className='flex h-full w-full flex-col items-end   '>
                        <div id='about' className='h-screen w-[50%] '>
                                <About />
                        </div>

                        <div id='experience' className='h-screen bg-cyan-600 w-[50%] '></div>

                        <div id='project' className='h-screen bg-purple-500 w-[50%] '></div>
                        <div id='skills' className='h-screen bg-green-500 w-[50%] '></div>
                </div >

        )
}

export default Body
