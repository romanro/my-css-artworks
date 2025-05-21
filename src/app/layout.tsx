import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';
import { MainNavbar } from '@/components/MainNavbar/MainNavbar';
import { ROOT_METADATA } from '@/consts/rootMetadata.consts';

const didactGothic = localFont({
    src: './fonts/DidactGothic-Regular.ttf',
    variable: '--font-didact-gothic',
    weight: '100 900',
});

const smooch = localFont({
    src: './fonts/Smooch-Regular.ttf',
    variable: '--font-smooch',
    weight: '400',
});

const icons = localFont({
    src: './fonts/MaterialIconsOutlined-Regular.otf',
    variable: '--font-icons',
    weight: '400',
});

export const metadata: Metadata = {
    ...ROOT_METADATA,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='h-screen'>
            <head>
                <link rel='manifest' href='/manifest.json' />
                <meta
                    name='viewport'
                    content='width=device-width, 
                   initial-scale=1.0'></meta>
            </head>
            <body className={`${didactGothic.variable} ${icons.variable} ${smooch.variable} h-screen`}>
                <MainNavbar />
                <main className='h-screen'>{children}</main>
            </body>
        </html>
    );
}
