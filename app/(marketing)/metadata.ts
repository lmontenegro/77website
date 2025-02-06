import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '77 VSL',
    description: '2025 - 77 Venture Studio Labs.',
    openGraph: {
        title: '77 VSL',
        description: '2025 - 77 Venture Studio Labs.',
        url: 'https://77vsl.com',
        siteName: '77 VSL',
        locale: 'es_ES',
        type: 'website',
        images: [
            {
                url: '/static/images/logo-grayscale-inverted.png', // Asegúrate de tener esta imagen en tu directorio public
                width: 1200,
                height: 630,
                alt: '77 VSL - Software Factory',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '77 VSL',
        description: '2025 - 77 Venture Studio Labs.',
        images: ['/static/images/logo-grayscale-inverted.png'], // La misma imagen que OpenGraph
    },
    robots: {
        index: true,
        follow: true,
    },
} 