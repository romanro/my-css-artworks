import { ArtworkDescription } from '@/components/ArtworkDescription/ArtworkDescription';
import { ArtworkViewer } from '@/components/ArtworkViewer/ArtworkViewer';
import { ArtworkId } from '@/models/artworks.models';
import { getArtworkById } from '@/utils/artwork.utils';
import { FC } from 'react';

type ArtworkDetailPageProps = {
    params: Promise<{ id: ArtworkId }>;
};

const ArtworkDetailPage: FC<ArtworkDetailPageProps> = async ({ params }) => {
    const { id } = await params;

    const artwork = getArtworkById(id);

    return (
        <section>
            <ArtworkViewer artworkId={id} />
            <ArtworkDescription artwork={artwork} />
        </section>
    );
};

export default ArtworkDetailPage;
