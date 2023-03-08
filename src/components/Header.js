import React from 'react';

const Header = () => {
  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/abhinandanmishra1/', '_blank');
  }

  return <header className='py-8'>
    <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <a href="#" className='uppercase flex flex-col font-bold text-[32px]'>
            <span className='logo'>Abhinandan</span> Mishra
          </a>

          <button className='btn btn-sm' onClick={openLinkedin}>Hire Me</button>
        </div>
    </div>
  </header>
};

export default Header;
