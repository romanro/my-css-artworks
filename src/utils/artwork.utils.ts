import { SupportedArtworks } from '@/consts/artworks.consts';
import { Artwork, ArtworkId } from '@/models/artworks.models';

export const getArtworkById = (id: ArtworkId): Artwork | undefined => {
    return SupportedArtworks.find((a) => a.id === id);
};
