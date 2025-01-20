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

export const metadata: Metadata = {
    ...ROOT_METADATA,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <link rel='manifest' href='/manifest.json' />
                <meta name='theme-color' content='#000000' />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <MainNavbar />
                <main>{children}</main>
            </body>
        </html>
    );
}
