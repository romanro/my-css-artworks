import { getRandom } from '@/utils/randomizer';
import { FC } from 'react';
import styles from './Clouds.module.scss';
export const Cloud: FC = () => {
    const numParts = Math.floor(getRandom(3, 15)); // Parts in cloud
    const speed = getRandom(30, 70); // Speed of movement
    const topPosition = getRandom(1, 50); // Height
    const cloudSize = getRandom(80, 400); // size
    const delay = getRandom(1, 12); // Delay of animation
    const opacity = getRandom(20, 100) / 100; // Delay of animation

    return (
        <div
            className={`cloud absolute flex ${styles.animateCloud}`}
            style={{
                top: `${topPosition}vh`,
                left: `-${cloudSize}px`,
                animationDuration: `${speed}s`,
                animationDelay: `${delay}s`,
                opacity: opacity,
            }}>
            {Array.from({ length: numParts }).map((_, i) => (
                <div
                    key={i}
                    className='bg-white rounded-full absolute'
                    style={{
                        width: `${getRandom(40, 120)}px`,
                        height: `${getRandom(30, 80)}px`,
                        left: `${getRandom(-70, 70)}px`,
                        top: `${getRandom(-20, 20)}px`,
                        filter: 'blur(10px)',
                    }}
                />
            ))}
        </div>
    );
};
