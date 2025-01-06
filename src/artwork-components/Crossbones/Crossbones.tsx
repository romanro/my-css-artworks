import React, { FC } from 'react';
import styles from './Crossbones.module.scss';
import { cnames } from '@/utils/cnames';

export const Crossbones: FC = () => {
    return (
        <div className={styles.crossbones_background}>
            <div className={styles.dead_head}>
                <div className={styles.forehead}>
                    <div className={cnames([styles.brow, styles.left])} />
                    <div className={cnames([styles.brow, styles.right])} />
                    <div className={styles.central} />
                </div>
                <div className={styles.eyes}>
                    <div className={cnames([styles.eye, styles.left])} />
                    <div className={cnames([styles.eye, styles.right])} />
                </div>

                <div className={styles.nose}></div>
                <div className={styles.jaws}>
                    <div className={styles.top} />
                    <div className={styles.mouth}>
                        <ul className={cnames([styles.tooth, styles.ttop])}>
                            <li className={styles.wisdom} />
                            <li className={styles.cuspid} />
                            <li className={styles.lincisor} />
                            <li className={styles.cincisor} />
                            <li className={styles.cincisor} />
                            <li className={styles.lincisor} />
                            <li className={styles.cuspid} />
                            <li className={styles.wisdom} />
                        </ul>
                        <ul className={cnames([styles.tooth, styles.tbottom])}>
                            <li className={styles.wisdom} />
                            <li className={styles.cuspid} />
                            <li className={styles.lincisor} />
                            <li className={styles.cincisor} />
                            <li className={styles.cincisor} />
                            <li className={styles.lincisor} />
                            <li className={styles.cuspid} />
                            <li className={styles.wisdom} />
                        </ul>
                    </div>
                    <div className={styles.bottom} />
                </div>
            </div>
            <div className={cnames([styles.bone, styles.one])}>
                <div className={cnames([styles.bone_roll, styles.tl])} />
                <div className={cnames([styles.bone_roll, styles.bl])} />
                <div className={cnames([styles.bone_roll, styles.tr])} />
                <div className={cnames([styles.bone_roll, styles.br])} />
            </div>
            <div className={cnames([styles.bone, styles.two])}>
                <div className={cnames([styles.bone_roll, styles.tl])} />
                <div className={cnames([styles.bone_roll, styles.bl])} />
                <div className={cnames([styles.bone_roll, styles.tr])} />
                <div className={cnames([styles.bone_roll, styles.br])} />
            </div>
        </div>
    );
};
