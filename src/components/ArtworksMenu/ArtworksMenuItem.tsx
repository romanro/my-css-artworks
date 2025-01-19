import { Artwork } from '@/models/artworks.models';
import Link from 'next/link';
import React, { FC } from 'react';

type ArtworksMenuItemProps = {
    artwork: Artwork;
    isSelected?: boolean;
};

export const ArtworksMenuItem: FC<ArtworksMenuItemProps> = ({ artwork, isSelected }) => {
    return <li>{isSelected ? <span>{artwork.name}</span> : <Link href={artwork.id}>{artwork.name}</Link>}</li>;
};
