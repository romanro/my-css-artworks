'use client';
import Link from 'next/link';
import React, { FC } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './MainNavbar.module.scss';
import { usePathname } from 'next/navigation';

type NavButtonProps = {
    id: string;
    icon: string;
    label: string;
    href: string;
    onClick?: () => void;
};

const NavButton: FC<NavButtonProps> = ({ label, icon, href, onClick }) => {
    const pathname = usePathname();

    return (
        <li className={styles.navbutton} onClick={() => pathname !== href && onClick?.()}>
            <Link
                href={href}
                className={`flex md:flex-col min-w-[75px] md:justify-center items-center gap-[5px] select-none text-sky-900 hover:text-sky-700  ${
                    pathname === href ? 'pointer-events-none text-sky-600' : ''
                }`}>
                <Icon name={icon} className={'text-3xl md:text-5xl'} />
                <span className={'text-md md:text-sm'}>{label}</span>
            </Link>
        </li>
    );
};

export { NavButton };
