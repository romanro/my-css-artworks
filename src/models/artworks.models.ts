export type ArtworkId = 'crossbones' | 'sunset';

export type Artwork = {
    id: ArtworkId;
    name: string;
    thumbnail?: string;
    description?: string;
};
