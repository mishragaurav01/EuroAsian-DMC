import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata = {
    title: {
        default: 'EuroAsian DMC | Premium Destination Management',
        template: '%s | EuroAsian DMC',
    },
    description:
        'EuroAsian DMC offers premium destination management services across Europe and Asia. Expert travel planning, corporate events, and bespoke experiences.',
    keywords: ['DMC', 'destination management', 'travel', 'Europe', 'Asia', 'corporate travel'],
    authors: [{ name: 'EuroAsian DMC' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        siteName: 'EuroAsian DMC',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.variable}>
            <body>{children}</body>
        </html>
    );
}
