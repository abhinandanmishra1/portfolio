import React from 'react';
import { useT } from '../i18n';
import { Button } from './common';

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

          <Button size="sm" onClick={openLinkedin}>{t('header.hireMe')}</Button>
        </div>
    </div>
  </header>
};
