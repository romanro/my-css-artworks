import React, { FC } from 'react';
import styles from './Crossbones.module.scss';

export const Crossbones: FC = () => {
    return (
        <div className={styles.crossbones_background}>
            <div className='dead-head'>
                <div className='eyes'>
                    <div className='eye left'></div>
                    <div className='eye right'></div>
                </div>

                <div className='nose'></div>

                <div className='jaws'></div>
            </div>
            <div className='bone one'>
                <div className='bone-roll tl' />
                <div className='bone-roll bl' />
                <div className='bone-roll tr' />
                <div className='bone-roll br' />
            </div>
            <div className='bone two'>
                <div className='bone-roll tl' />
                <div className='bone-roll bl' />
                <div className='bone-roll tr' />
                <div className='bone-roll br' />
            </div>
        </div>
    );
};
