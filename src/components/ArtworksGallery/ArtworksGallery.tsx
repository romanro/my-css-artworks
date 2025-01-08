import { Artwork } from '@/models/artworks.models';
import Image from 'next/image';
import React, { FC } from 'react';
import styles from './ArtworksGallery.module.scss';

type ArtworksGalleryProps = {
    artworks: Artwork[];
};
export const ArtworksGallery: FC<ArtworksGalleryProps> = ({ artworks }) => {
    return (
        <ul className={styles.ArtworksList}>
            {artworks.map((artwork) => (
                <li key={`gallery_item_${artwork.id}`} className={styles.ListItem}>
                    <Image
                        src={artwork.thumbnail ? `/previews/${artwork.thumbnail}` : ''}
                        alt={artwork.description ?? 'Artwork preview'}
                        fill
                        loading='lazy'
                        style={{ objectFit: 'fill', objectPosition: 'center' }}
                    />
                </li>
            ))}
        </ul>
    );
};
