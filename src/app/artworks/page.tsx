import { ArtworkPageText } from '@/components/ArtworkPageText/ArtworkPageText';
import { ArtworksGallery } from '@/components/ArtworksGallery/ArtworksGallery';
import { SupportedArtworks } from '@/consts/artworks.consts';
import { ARTWORKS_DESK, ROOT_METADATA } from '@/consts/rootMetadata.consts';
import { cnames } from '@/utils/cnames';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    const title = `Artworks Gallery: ${ROOT_METADATA.title}`;
    const keywords = ['Artworks Gallery', ...(ROOT_METADATA.keywords as string[])];
    return {
        ...ROOT_METADATA,
        title,
        keywords,
        description: ARTWORKS_DESK,
    };
}
export default function ArtworksPage() {
    return (
        <div className='grid grid-cols-1 pt-[50px] md:grid-cols-9 gap-2 p-4 md:p-6 max-w-screen-xl mx-auto md:p-12 md:pt-[200px] bg-white/20 dark:bg-black/20'>
            <article className={cnames(['info-article', 'md:col-span-4 text-blue-900'])}>
                <ArtworkPageText />
            </article>
            <section className='md:col-span-5'>
                <ArtworksGallery artworks={SupportedArtworks} />
            </section>
        </div>
    );
}
