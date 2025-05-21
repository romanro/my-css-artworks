import React, { FC } from 'react';
import styles from './Icon.module.scss';

type IconProps = {
    name: string;
    className?: string;
};

const Icon: FC<IconProps> = ({ name, className }) => {
    return <span className={`${styles.icon} ${className} font-icons`}>{name}</span>;
};

export { Icon };
