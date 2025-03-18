import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.scss';
import { MainNavbar } from '@/components/MainNavbar/MainNavbar';
import { ROOT_METADATA } from '@/consts/rootMetadata.consts';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
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
            <body className={`${geistSans.variable} ${geistMono.variable} ${icons.variable} h-screen`}>
                <MainNavbar />
                <main className='h-screen'>{children}</main>
            </body>
        </html>
    );
}
