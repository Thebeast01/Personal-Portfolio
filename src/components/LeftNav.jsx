import React from 'react';
import { Link } from 'react-scroll';
const LeftNav = () => {

        return (
                <div className=' ml-10 rounded-xl p-4 h-fit   fixed top-32 '>
                        <div className=''>
                                <h1 className=' name text-xl md:text-4xl mt-10 f font-name text-[#6ff6f9] italic'>Mohammad Saif </h1>
                                <h3 className='text-md  md:text-[1.5rem] mb-2 font-Mont mt-2 text-[#bbd6e2]'> Frontend Engineer</h3>
                                <p className='text-sm italic font-Mont text-[#699cb2]'>I help people to convert imagination into reality</p>

                                <div className='h-full  pl-12 pt-12 gap-6 flex-col flex
                                text-cyan-100'>
                                        {' '}
                                        <div className='flex items-center gap-2 hover:scale-x-125  w-fit origin-left ease-in-out duration-150  '>
                                                <div className=' w-14 relative   border-[1px] border-cyan border-[#7689ff] hover:border-cyan-100' />
                                                <Link className='font-Mont text-sm sm:text-[1rem] uppercase text-[#7689ff] hover:text-cyan-100  cursor-pointer focus:text-purple  '
                                                        spy={true}
                                                        smooth={true}
                                                        duration={600}


                                                        to='about'>
                                                        About
                                                </Link>
                                        </div>{' '}
                                        <div className='flex items-center gap-2  hover:scale-x-125   w-fit origin-left ease-in-out duration-150  '>
                                                <div className=' w-14 relative   border-[1px] border-cyan border-[#7689ff]' />
                                                <Link className='font-Mont text-sm sm:text-[1rem] uppercase text-[#7689ff]  hover:text-inherit cursor-pointer ' to='experience'
                                                        spy={true}
                                                        smooth={true}
                                                        duration={600}

                                                >
                                                        Experience
                                                </Link>
                                        </div>{' '}
                                        <div className='flex items-center gap-2 hover:scale-x-125  w-fit origin-left ease-in-out duration-150  '>
                                                <div className=' w-14 relative   border-[1px] border-cyan border-[#7689ff]' />
                                                <Link spy={true}
                                                        smooth={true}
                                                        duration={600}
                                                        className='font-Mont text-sm sm:text-[1rem] text-[#7689ff]  uppercase hover:text-inherit active:text-inherit cursor-pointer' to='project'>
                                                        Projects
                                                </Link>
                                        </div>{' '}
                                        <div className='flex items-center gap-2 hover:scale-x-110  w-fit origin-left ease-in-out duration-150  '>
                                                <div className=' w-14 relative   border-[1px] border-cyan border-[#7689ff]' />
                                                <Link spy={true}
                                                        smooth={true}
                                                        duration={600}
                                                        className='font-Mont text-sm sm:text-[1rem] uppercase text-[#7689ff]  hover:text-inherit cursor-pointer' to='skills'>
                                                        Skills
                                                </Link>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default LeftNav;
