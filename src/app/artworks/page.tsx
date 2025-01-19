'use client';
import { ArtworksGallery } from '@/components/ArtworksGallery/ArtworksGallery';
import { SupportedArtworks } from '@/consts/artworks.consts';

export default function ArtworksPage() {
    return (
        <div>
            <h1>Artworks List</h1>
            <p>This page will show the list of all artworks.</p>
            <ArtworksGallery artworks={SupportedArtworks} />
        </div>
    );
}
