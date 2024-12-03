import { Crossbones } from '@/artwork-components/Crossbones/Crossbones';
import { FC } from 'react';

type ArtworkDetailPageProps = {
    params: { id: string };
};

const ArtworkDetailPage: FC<ArtworkDetailPageProps> = async ({ params }) => {
    const { id } = await params;

    const getArtworkComponent = () => {
        if (id === 'crossbones') {
            return <Crossbones />;
        }

        return null;
    };

    const artworkComponent = getArtworkComponent();

    return <div>{artworkComponent}</div>;
};

export default ArtworkDetailPage;
