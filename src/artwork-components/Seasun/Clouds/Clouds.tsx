'use client';
import React, { FC, useEffect, useState } from 'react';
import styles from './Clouds.module.scss';
import { getRandom } from '@/utils/randomizer';

const Cloud: FC = () => {
    const numParts = Math.floor(getRandom(3, 7)); // Количество частей в облаке
    const speed = getRandom(20, 50); // Скорость движения
    const topPosition = getRandom(5, 80); // Случайная высота
    const cloudSize = getRandom(80, 300); // Размер облака

    return (
        <div
            className={`cloud absolute flex ${styles.animateCloud}`}
            style={{
                top: `${topPosition}vh`,
                left: `-${cloudSize}px`, // Начинаем за левой границей экрана
                animationDuration: `${speed}s`,
            }}>
            {Array.from({ length: numParts }).map((_, i) => (
                <div
                    key={i}
                    className='bg-white rounded-full absolute opacity-80'
                    style={{
                        width: `${getRandom(30, 80)}px`,
                        height: `${getRandom(30, 80)}px`,
                        left: `${getRandom(-20, 20)}px`,
                        top: `${getRandom(-20, 20)}px`,
                        filter: 'blur(10px)',
                    }}
                />
            ))}
        </div>
    );
};

const CloudAnimation = () => {
    const [clouds, setClouds] = useState<{ id: number }[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setClouds((prev) => [...prev, { id: Date.now() }]);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`w-screen overflow-hidden relative ${styles.clouds}`}>
            {clouds.map(({ id }) => (
                <Cloud key={id} />
            ))}
        </div>
    );
};

export { CloudAnimation };
