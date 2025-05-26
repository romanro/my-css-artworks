import { type FC } from 'react';
import styles from './Logo.module.scss';
const Logo: FC = () => {
    return (
        <div className={styles.logoWrapper}>
            <h1 className={styles.logo}>{`-Antifreez's-`}</h1>
            <h2 className={styles.moto}>CSS Art Gallery</h2>
        </div>
    );
};

export { Logo };
