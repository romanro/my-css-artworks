'use client';
import { ArtworksMenu } from '@/components/ArtworksMenu/ArtworksMenu';
import { ArtworksContext } from '@/context/ArtworksContext';
import { useContext } from 'react';

export default function ArtworksLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { artworks } = useContext(ArtworksContext);

    return (
        <div>
            <ArtworksMenu artworks={artworks} />
            {children}
        </div>
    );
}
