import About from './about/About'
import Experience from './experience/Experience'
function Body() {
        return (


                <div className='flex h-full w-full flex-col items-end   '>
                        <div id='about' className='h-screen w-[55%] '>
                                <About />
                        </div>

                        <div id='experience' className='h-screen w-[55%] '>
                                <Experience />
                        </div>

                        <div id='project' className='h-screen bg-purple-500 w-[55%] '></div>
                        <div id='skills' className='h-screen bg-green-500 w-[55%] '></div>
                </div >

        )
}

export default Body
