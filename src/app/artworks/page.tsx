import { ArtworksGallery } from '@/components/ArtworksGallery/ArtworksGallery';
import { SupportedArtworks } from '@/consts/artworks.consts';
import { ARTWORKS_DESK, ROOT_METADATA } from '@/consts/rootMetadata.consts';
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
        <div>
            <article>
                <header>
                    <h1>Artworks Gallery</h1>
                    <p>
                        {`Welcome to the Antifreez CSS Art Gallery, a showcase of handcrafted creations where style meets structure.`}
                    </p>
                    <p>
                        {`Each piece in this collection is built using only HTML and CSS, 
                demonstrating the potential of modern styling techniques without relying on images or external libraries.`}
                    </p>
                </header>
                <h2>{`What You'll Find Here`}</h2>
                <p>
                    {`Explore a range of pure CSS artworks, from intricate illustrations to smooth animations, all crafted with a focus on performance, responsiveness, and creativity.`}
                </p>
                <p>
                    {`Whether you're here for inspiration, to learn new tricks, or just to enjoy creative front-end work, you're in the right place.`}
                </p>
                <h2>Behind the Scenes</h2>
                <p>
                    {`Every artwork is a result of meticulous design and experimentation, leveraging the power of SCSS,
                    including features like mixins, variables, and modular architecture.`}
                </p>
                <p>
                    {`This approach allows for flexible and maintainable styles while pushing the boundaries of what CSS
                    can achieve.`}
                </p>
                <h2>Get Inspired</h2>
                <p>
                    {`Take a look through the gallery, dive into the code, and discover new ways to enhance your own projects. 
                    Whether you're a seasoned developer or just starting out, 
                    these CSS artworks prove that code can be both functional and beautiful.`}
                </p>
                <footer>
                    <p>{`Enjoy exploring the collection, and let's create something amazing with CSS and SCSS!`}</p>
                </footer>
            </article>
            <section>
                <ArtworksGallery artworks={SupportedArtworks} />
            </section>
        </div>
    );
}
