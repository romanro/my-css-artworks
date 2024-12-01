import { Crossbones } from '@/artwork-components/Crossbones/Crossbones';

type ArtworkDetailPageProps = {
    params: { id: string };
};

export default function ArtworkDetailPage({ params }: ArtworkDetailPageProps) {
    const { id } = params;

    const getArtworkComponent = () => {
        if (id === 'crossbones') {
            return <Crossbones />;
        }

        return null;
    };

    return <div>{getArtworkComponent()}</div>;
}
