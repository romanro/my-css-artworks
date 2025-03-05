import Link from 'next/link';
import { FC } from 'react';

export const MainNavbar: FC = () => {
    return (
        <nav>
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
