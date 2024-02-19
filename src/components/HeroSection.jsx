import React, { useContext, useEffect } from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import CodeArea from './CodeArea'
import { dataContext } from './Context';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function HeroSection() {

  let { language} = useContext(dataContext);

  useEffect(function()
  {
    window.scrollTo(0,0)
  },[])

  return (


    <div className='relative  w-full flex flex-col pt-5 items-center text-white md:mt-8 '>

      <h1 className='text-3xl font-medium  text-center '>Effortless Coding, Seamless Compiling</h1>

      <div className='mt-4 font-light flex flex-col items-center '>
        <p>Welcome to Rapid Compiler - Your</p>
        <p>Ultimate Code Compiler.</p>
      </div>

      <Link to={"/language"} className='border-2  pb-4 pt-2 mt-10 flex items-center justify-center px-10 gap-5 ' onClick={() => setShowLanguageSection(!showLanguageSection)}>
        <div className='flex items-center gap-2 relative'>
          <h1>Language</h1>
          <p className='text-xs absolute top-6 left-12 text-[yellow]'>{`{${language}}`}</p>
        </div>
        <FaLocationArrow />
      </Link>

      <CodeArea />

    </div>
  )
}

export default HeroSection