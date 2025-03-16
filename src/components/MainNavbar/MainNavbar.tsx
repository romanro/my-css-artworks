import Link from 'next/link';
import { FC } from 'react';
import styles from './MainNavbar.module.scss';
export const MainNavbar: FC = () => {
    return (
        <nav className={`${styles.nav} bg-white dark:bg-black`}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
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
