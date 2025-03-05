import React, { FC } from 'react';
import { Artwork, ArtworkId } from '@/models/artworks.models';
import { ArtworksMenuItem } from './ArtworksMenuItem';

type ArtworksMenuProps = {
    artworks: Artwork[];
    selectedArtworkId?: ArtworkId;
};
export const ArtworksMenu: FC<ArtworksMenuProps> = ({ artworks, selectedArtworkId }) => {
    if (!artworks?.length) {
        return null;
    }
    return (
        <menu>
            <ul>
                {artworks.map((artwork) => {
                    return (
                        <ArtworksMenuItem
                            key={artwork.id}
                            artwork={artwork}
                            isSelected={artwork.id === selectedArtworkId}
                        />
                    );
                })}
            </ul>
        </menu>
    );
};
