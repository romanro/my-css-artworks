import React, { FC } from 'react';
import { Artwork } from '@/models/artworks.models';

type ArtworkDescriptionProps = { artwork?: Artwork };

export const ArtworkDescription: FC<ArtworkDescriptionProps> = ({ artwork }) => {
    if (!artwork) {
        return <p>Artwork is not found</p>;
    }

    const { name, description } = artwork;
    return (
        <article>
            <h3>{name}</h3>
            {description && <p>{description}</p>}
        </article>
    );
};
