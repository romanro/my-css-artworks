import React, { FC } from 'react';
import styles from './Seasun.module.scss';

export const Seasun: FC = () => {
    return (
        <div className={`${styles.container}`}>
            <section className={`${styles.sky}`}></section>
            <div className={`${styles.sun}`}></div>
            <section className={`${styles.sea}`}></section>
        </div>
    );
};
