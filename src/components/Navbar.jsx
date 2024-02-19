import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assests/images/Logo.png';
import { MdOutlineMenu } from 'react-icons/md';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

function Navbar() {
  const [navMenu, setNavMenu] = useState(false);
  const controls = useAnimation();
  const navbarRef = useRef(null);

  const handleNavMenuToggle = () => {
    setNavMenu(!navMenu);
    controls.start(navMenu ? { opacity: 1, display: 'flex' } : { opacity: 0, display: 'none' });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setNavMenu(false);
        controls.start({ opacity: 0, display: 'none' });
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [controls]);

  return (
    <div className='z-20 w-full py-5 flex items-center justify-center backdrop-blur-lg relative' ref={navbarRef}>
      <div className='bg-gray-500 rounded-md bg-opacity-[0.5] -z-10 border-2 border-zinc-400 w-[75%] p-3 flex items-center justify-between text-lg text-white'>
        <Link to={"/"}>
          <img src={Logo} className='object-cover object-center w-12' alt='' />
        </Link>

        <div className='hidden gap-5 text-base md:flex'>
          <Link to={'/'} className='relative w-fit  linkItems'>
            {`<Home/>`}
          </Link>
          <Link to={'/language'} className='relative w-fit  linkItems'>
            Languages
          </Link>
          <a href={'https://github.com/SianAliMalik2418'} target='_blank' className='relative w-fit  linkItems'>
            Github
          </a>
        </div>
        <MdOutlineMenu onClick={handleNavMenuToggle} className='inline-block sm:hidden' size={25} />
      </div>

      <motion.div
        animate={controls}
        initial={{ opacity: 0, display: 'none' }}
        className='bg-zinc-300 transition-all text-black absolute top-[7rem] w-full py-5   text-xl font-semibold gap-3 flex flex-col justify-center px-3 overflow-hidden'
      >
        <Link to={'/'} onClick={handleNavMenuToggle} className=''>
          {`<Home/>`}
        </Link>
        <Link to={'/language'} onClick={handleNavMenuToggle} className=''>
          Languages
        </Link>
        <Link to={'https://github.com/SianAliMalik2418'} onClick={handleNavMenuToggle} target='/blank' className=''>
          Github
        </Link>
      </motion.div>
    </div>
  );
}

export default Navbar;
