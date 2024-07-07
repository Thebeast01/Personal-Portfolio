import { useState, useEffect } from 'react';
import { motion, transform } from 'framer-motion'
import useMousePosition from '../Hooks/useMousePosition';
const Cursor = () => {

        const mousePosition = useMousePosition();

        return (
                <div className=' relative z-50  '>
                        <motion.div className=' pointer-events-none transition duration-100  bg-cursor z-30 w-[200px] h-[200px] rounded-full blur-[200px] fixed  '
                                style={{
                                        left: `${mousePosition.x - 100}px`,
                                        top: `${mousePosition.y - 100}px`
                                }}


                        >
                        </motion.div>

                </div >
        )
}

export default Cursor
