import React from 'react';
import { Link } from 'react-router-dom';
const LeftNav = () => {

        return (
                <div className=' ml-10 rounded-xl p-4 h-fit border-2 border-white fixed top-32 '>
                        <div className=''>
                                <h1 className=' name text-xl md:text-4xl mt-10 f font-name text-[#6ff6f9] italic'>Mohammad Saif </h1>
                                <h3 className='text-md italic md:text-lg font-name mt-2 text-[#bbd6e2]'> Frontend Engineer</h3>
                                <p className='text-md italic font-name text-[#bbd6e2]'>I help people to convert imagination into reality</p>

                                <div className='h-full  pl-12 pt-12 gap-6 flex-col flex
                                text-cyan-100'>
                                        {' '}
                                        <div className='flex items-center gap-2 hover:scale-x-125  w-fit origin-left ease-in-out duration-150  '>
                                                <div className=' w-14 relative   border-[1px] border-cyan border-[#2a6a7a] hover:border-cyan-100' />
                                                <Link className='font-name text-sm sm:text-[1.2em] text-[#2a6a7a] hover:text-cyan-100 '

                                                        onClick={() => aboutRef.current.scrollIntoView({ behaviour: 'smooth' })}
                                                        to={'#about'}>
                                                        About
                                                </Link>
                                        </div>{' '}
                                        <div className='flex items-center  hover:scale-x-125   w-fit origin-left ease-in-out duration-150  '>
                                                <div className=' w-14 relative   border-[1px] border-cyan border-[#2a6a7a]' />
                                                <Link className='font-name text-sm sm:text-[1.2em] text-[#2a6a7a] hover:text-inherit ' to={'#experience'}
                                                        onClick={() => aboutRef.current.scrollIntoView({
                                                                behaviour: 'smooth'
                                                        })}
                                                >
                                                        Experience
                                                </Link>
                                        </div>{' '}
                                        <div className='flex items-center gap-2 hover:scale-x-125  w-fit origin-left ease-in-out duration-150  '>
                                                <div className=' w-14 relative   border-[1px] border-cyan border-[#2a6a7a]' />
                                                <Link onClick={() => aboutRef.current.scrollIntoView({ behaviour: 'smooth' })} className='font-name text-sm sm:text-[1.2em] text-[#2a6a7a] hover:text-inherit active:text-inherit' to={'#project'}>
                                                        Projects
                                                </Link>
                                        </div>{' '}
                                        <div className='flex items-center gap-2 hover:scale-x-125  w-fit origin-left ease-in-out duration-150  '>
                                                <div className=' w-14 relative   border-[1px] border-cyan border-[#2a6a7a]' />
                                                <Link onClick={() => aboutRef.current.scrollIntoView({ behaviour: 'smooth' })} className='font-name text-sm sm:text-[1.2em] text-[#2a6a7a] ' to={'#skills'}>
                                                        Skills
                                                </Link>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default LeftNav;
