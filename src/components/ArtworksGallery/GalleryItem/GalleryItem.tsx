import { Artwork } from '@/models/artworks.models';
import React, { FC } from 'react';
import styles from './GalleryItem.module.scss';
import Image from 'next/image';
import Link from 'next/link';

type GalleryItemProps = {
    artwork: Artwork;
};

export const GalleryItem: FC<GalleryItemProps> = ({ artwork }) => {
    return (
        <li className={styles.ListItem}>
            <Link href={`artworks/${artwork.id}`}>
                <Image
                    src={artwork.thumbnail ? `/previews/${artwork.thumbnail}` : ''}
                    alt={artwork.description ?? 'Artwork preview'}
                    fill
                    loading='lazy'
                    style={{ objectFit: 'fill', objectPosition: 'center' }}
                />
                <div className={styles.Description}>
                    <h3>{artwork.name}</h3>
                    <p>{artwork.description}</p>
                </div>
            </Link>
        </li>
    );
};
