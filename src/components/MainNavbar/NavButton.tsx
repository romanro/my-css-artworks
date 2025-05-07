import Link from 'next/link';
import React, { FC } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './MainNavbar.module.scss';

type NavButtonProps = {
    id: string;
    icon: string;
    label: string;
    href: string;
};

const NavButton: FC<NavButtonProps> = ({ label, icon, href }) => {
    return (
        <li className={styles.navbutton}>
            <Link href={href} className={styles.link}>
                <Icon name={icon} />
                <span>{label}</span>
            </Link>
        </li>
    );
};

export { NavButton };
