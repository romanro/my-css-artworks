'use client';
import { FC, useState } from 'react';
import styles from './MainNavbar.module.scss';
import { NavButton } from './NavButton';
import { NAVIGATION } from '@/consts/navigation.consts';
import { Icon } from '../Icon/Icon';
export const MainNavbar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${styles.nav} w-full flex md:justify-center md:p-4 `}>
            <nav className={`bg-white dark:bg-black p-4 rounded-lg shadow-md`}>
                <button
                    className='md:hidden text-gray-700 dark:text-gray-300'
                    onClick={() => setIsOpen((prev) => !prev)}>
                    <Icon name={isOpen ? 'close' : 'menu'} />
                </button>

                <ul
                    className={`${
                        isOpen ? 'block' : 'hidden'
                    } md:flex md:items-center md:space-x-6 px-8 pb-8 md:pb-0 md:px-8`}>
                    {NAVIGATION.map((nav) => (
                        <NavButton key={nav.id} {...nav} />
                    ))}
                </ul>
            </nav>
        </div>
    );
};
