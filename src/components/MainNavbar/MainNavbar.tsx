import Link from 'next/link';
import { FC } from 'react';
import styles from './MainNavbar.module.scss';
import { Icon } from '../Icon/Icon';
export const MainNavbar: FC = () => {
    return (
        <nav className={`${styles.nav} bg-white dark:bg-black`}>
            <ul>
                <li>
                    <Link href='/'>
                        <Icon name='home' /> Home
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        <span className='font-icons'>contact_page</span> About
                    </Link>
                </li>
                <li>
                    <Link href='/artworks'>ArtWorks</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact me</Link>
                </li>
            </ul>
        </nav>
    );
};
