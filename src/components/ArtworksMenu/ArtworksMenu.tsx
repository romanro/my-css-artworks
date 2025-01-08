import React, { FC } from 'react';
import { Artwork } from '@/models/artworks.models';
import Link from 'next/link';

type ArtworksMenuProps = {
    artworks: Artwork[];
};
export const ArtworksMenu: FC<ArtworksMenuProps> = ({ artworks }) => {
    if (!artworks?.length) {
        return null;
    }
    return (
        <menu>
            <ul>
                {artworks.map((artwork) => {
                    return (
                        <li key={artwork.id}>
                            <Link href={artwork.id}>{artwork.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </menu>
    );
};
