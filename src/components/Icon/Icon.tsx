import React, { FC } from 'react';
import styles from './Icon.module.scss';

type IconProps = {
    name: string;
    size?: number;
};

const Icon: FC<IconProps> = ({ name, size = 24 }) => {
    return (
        <span className={`${styles.icon} font-icons`} style={{ fontSize: size }}>
            {name}
        </span>
    );
};

export { Icon };
