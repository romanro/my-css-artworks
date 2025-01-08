'use client';
import { ArtworksGallery } from '@/components/ArtworksGallery/ArtworksGallery';
import { SupportedArtworks } from '@/consts/artworks.consts';
import { ArtworksContext } from '@/context/ArtworksContext';

export default function ArtworksPage() {
    const artworks = SupportedArtworks;

    return (
        <ArtworksContext.Provider value={{ artworks: SupportedArtworks }}>
            <div>
                <h1>Artworks List</h1>
                <p>This page will show the list of all artworks.</p>
                <ArtworksGallery artworks={artworks} />
            </div>
        </ArtworksContext.Provider>
    );
}
