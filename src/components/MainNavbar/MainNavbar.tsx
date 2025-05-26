'use client';
import { FC, useState } from 'react';
import styles from './MainNavbar.module.scss';
import { NavButton } from './NavButton';
import { NAVIGATION } from '@/consts/navigation.consts';
import { Icon } from '../Icon/Icon';
export const MainNavbar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${styles.nav} w-full flex p-2 md:justify-center md:p-4 `}>
            <nav className='bg-white/80 dark:bg-black/80 p-4 rounded-lg shadow-md'>
                <button
                    className='md:hidden text-gray-700 dark:text-gray-300'
                    onClick={() => setIsOpen((prev) => !prev)}>
                    <Icon name={isOpen ? 'close' : 'menu'} />
                </button>

                <ul
                    className={`menu overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-[500px] max-w-[500px]' : 'max-h-0 max-w-0'
                    } md:max-h-[500px] md:max-w-[800px] md:flex md:items-center md:space-x-6 `}>
                    {NAVIGATION.map((nav) => (
                        <NavButton key={nav.id} onClick={() => setIsOpen(false)} {...nav} />
                    ))}
                </ul>
            </nav>
        </div>
    );
};
