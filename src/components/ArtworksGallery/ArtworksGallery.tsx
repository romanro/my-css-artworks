import { Artwork } from '@/models/artworks.models';
import React, { FC } from 'react';
import styles from './ArtworksGallery.module.scss';
import { GalleryItem } from './GalleryItem/GalleryItem';

type ArtworksGalleryProps = {
    artworks: Artwork[];
};
export const ArtworksGallery: FC<ArtworksGalleryProps> = ({ artworks }) => {
    return (
        <ul className={styles.ArtworksList}>
            {artworks.map((artwork) => (
                <GalleryItem key={`gallery_item_${artwork.id}`} artwork={artwork} />
            ))}
        </ul>
    );
};
