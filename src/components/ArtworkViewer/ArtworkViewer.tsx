import React, { FC, ReactNode } from 'react';
import { Crossbones } from '@/artwork-components/Crossbones/Crossbones';
import { Sunset } from '@/artwork-components/Sunset/Sunset';
import { ArtworkId } from '@/models/artworks.models';

type ArtworkViewerProps = {
    artworkId?: ArtworkId;
};

const ArtworkIdComponentMap: Record<ArtworkId, ReactNode> = {
    crossbones: <Crossbones />,
    sunset: <Sunset />,
} as const;

const getArtworkComponent = (id?: ArtworkId): ReactNode => {
    return id ? ArtworkIdComponentMap[id] ?? null : null;
};

export const ArtworkViewer: FC<ArtworkViewerProps> = ({ artworkId }) => {
    return <div>{getArtworkComponent(artworkId)}</div>;
};
