import { Crossbones } from '@/artwork-components/Crossbones/Crossbones';
import { Sunset } from '@/artwork-components/Sunset/Sunset';
import { ArtworkId } from '@/models/artworks.models';
import { FC } from 'react';

type ArtworkDetailPageProps = {
    params: { id: ArtworkId };
};

const ArtworkDetailPage: FC<ArtworkDetailPageProps> = async ({ params }) => {
    const { id } = await params;

    const getArtworkComponent = () => {
        if (id === 'crossbones') {
            return <Crossbones />;
        } else if (id === 'sunset') {
            return <Sunset />;
        }

        return null;
    };

    const artworkComponent = getArtworkComponent();

    return <div>{artworkComponent}</div>;
};

export default ArtworkDetailPage;
