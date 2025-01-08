import { Artwork } from '@/models/artworks.models';
import Image from 'next/image';
import React, { FC } from 'react';

type ArtworksGalleryProps = {
    artworks: Artwork[];
};
export const ArtworksGallery: FC<ArtworksGalleryProps> = ({ artworks }) => {
    return (
        <ul>
            {artworks.map((artwork) => (
                <Image
                    key={`gallery_${artwork.id}`}
                    src={artwork.thumbnail ? `/previews/${artwork.thumbnail}` : ''}
                    alt={artwork.description ?? ''}
                    width={100}
                    height={100}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    loading='lazy'
                    style={{ objectFit: 'contain' }}
                />
            ))}
        </ul>
    );
};
