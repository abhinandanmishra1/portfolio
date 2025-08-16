import React from 'react';
import { useT } from '../i18n';
import { Button } from './common';
import { usePathname, useRouter } from 'next/navigation';
import { BiArrowBack } from 'react-icons/bi';

export const Header = () => {
  const { t } = useT();
  const router = useRouter();
  const openLinkedin = () => {
    window.open(t('links.linkedin'), '_blank');
  }

  const pathname = usePathname();
  if (pathname !== '/') {
    return <header className='py-8'>

      <div className="container mx-auto">
        <div
          className="flex items-center justify-center lg:justify-start gap-4 mb-8"
        >
          <Button
            size="sm"
            onClick={() => router.push('/')}
            className="flex items-center gap-2"
          >
            <BiArrowBack /> Back to Home
          </Button>
        </div>
      </div>
    </header>
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
