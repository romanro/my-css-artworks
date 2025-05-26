import { ArtworksMenu } from '@/components/ArtworksMenu/ArtworksMenu';
import { SupportedArtworks } from '@/consts/artworks.consts';
import { ArtworkId } from '@/models/artworks.models';

type ArtworksLayoutProps = Readonly<{
    children: React.ReactNode;
    params: Promise<{ id: ArtworkId }>;
}>;
export default async function ArtworksLayout({ children, params }: ArtworksLayoutProps) {
    const { id } = await params;

    return (
        <div>
            <ArtworksMenu artworks={SupportedArtworks} selectedArtworkId={id} />
            {children}
        </div>
    );
}
