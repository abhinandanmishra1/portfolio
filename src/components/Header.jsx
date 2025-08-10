import React from 'react';
import { useT } from '../i18n';

export const Header = () => {
  const { t } = useT();
  const openLinkedin = () => {
    window.open(t('links.linkedin'), '_blank');
  }

  return <header className='py-8'>
    <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <a href="#" className='uppercase flex flex-col font-bold text-[32px]'>
            <span className='logo'>{t('profile.firstName')}</span> {t('profile.lastName')}
          </a>

          <button className='btn btn-sm' onClick={openLinkedin}>{t('header.hireMe')}</button>
        </div>
    </div>
  </header>
};
