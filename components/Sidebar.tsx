import {AiFillGithub,AiFillLinkedin,AiOutlineMail,AiFillPhone,AiOutlineDownload} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import {SiTableau} from 'react-icons/si'

import React from 'react';

const Sidebar = () => {
  return (
    <div>
        <img 
            src='../../public/LinkedinPic.png' 
            alt="My Image" 
            className='w-32 h-32 mx-auto rounded-full '    
        /> 
        <h3 className='mt-4 space-x-2 text-3xl font-medium font-bold letter-spacing-wide font-Pacifico'>
            <span className='mr-2 space-x-2'>
                Ritesh  
            </span>
            Nandy
        </h3>

        <p className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full'>            
            <GiTie className="w-6 h-6" />
            Business Analyst
        </p>

        <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full' href='zdfsa' download=''>
            <AiOutlineDownload className="w-6 h-6" />
            Download Resume
        </a>


        {/* Social Media*/}
        <div className='flex justify-around w-9/12 mx-auto my-5 text-orange-600 md:w-full'>
            <a href='https://github.com/RiteshNandy'>
                <AiFillGithub className='w-8 h-8 cursor-pointer' />
            </a>

            <a href='https://www.linkedin.com/in/ritesh-nandy'>
                <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
            </a>

            <a href='https://www.linkedin.com/in/ritesh-nandy'>
                <SiTableau className='cursor-pointer w-7 h-7' />
            </a>
        </div>

        {/* Contact Details*/}
        <div className='py-4 my-5 bg-gray-200'
            style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
            <div className='flex items-center justify-center space-x-2'>
                <GoLocation />
                <span>
                    Toronto, Canada
                </span>
            </div>

            <div className='flex items-center justify-center my-2 space-x-2'>
                <AiOutlineMail />
                <span>
                    riteshkumarnandy@gmail.com
                </span>
            </div>

            <div className='flex items-center justify-center my-2 space-x-2'>
                <AiFillPhone />
                <span>
                    +(1) 647 675 5236
                </span>
            </div>
        </div>

        {/*Email Button*/}
        <button className='w-8/12 px-5 py-2 my-2 font-bold text-black rounded-full bg-gradient-to-r from-orange-500 to-yellow-300 focus:outline-none' 
            onClick={() => window.open('mailto:riteshkumarnandy@gmail.com')}>
            Email Me!
        </button>

        {/*Toggle Button*/}
        <button className='w-8/12 px-5 py-2 my-2 font-bold text-black rounded-full bg-gradient-to-r from-orange-500 to-yellow-300 focus:outline-none'>
            Toggle Theme
        </button>

    </div>
  )
}

export default Sidebar



