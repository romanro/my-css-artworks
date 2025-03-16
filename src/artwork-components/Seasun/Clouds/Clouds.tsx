import React, { FC } from 'react';
import styles from './Clouds.module.scss';
import { Cloud } from './Cloud';
import { getRandom } from '@/utils/randomizer';
const CloudAnimation: FC = () => {
    const numClouds = Math.floor(getRandom(0, 25));

    return (
        <div className={`w-screen overflow-hidden relative ${styles.clouds}`}>
            {Array.from({ length: numClouds }).map((_, i) => (
                <Cloud key={i} />
            ))}
        </div>
    );
};

export { CloudAnimation };
