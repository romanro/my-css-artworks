import { ArtworksMenu } from '@/components/ArtworksMenu/ArtworksMenu';

export default function ArtworksLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <ArtworksMenu />
            {children}
        </div>
    );
}
