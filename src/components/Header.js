import React from 'react';

import Logo from '../assets/logo.svg';

const Header = () => {
  return <header className='py-8'>
    <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <a href="#" className='uppercase flex flex-col font-bold text-[32px]'>
            <span className='logo'>Abhinandan</span> Mishra
          </a>

          <button className='btn btn-sm'>Hire Me</button>
        </div>
    </div>
  </header>
};

export default Header;
