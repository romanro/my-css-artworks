import { FC } from 'react';
import styles from './MainNavbar.module.scss';
import { NavButton } from './NavButton';
import { NAVIGATION } from '@/consts/navigation.consts';
export const MainNavbar: FC = () => {
    return (
        <nav className={`${styles.nav} bg-white dark:bg-black`}>
            <ul>
                {NAVIGATION.map((nav) => (
                    <NavButton key={nav.id} {...nav} />
                ))}
            </ul>
        </nav>
    );
};
