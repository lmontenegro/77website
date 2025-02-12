import { Metadata } from 'next'
import { MarketingLayout } from '#components/layout'

export const metadata: Metadata = {
    title: '77 VSL',
    description: '2025 - 77 Venture Studio Labs.',
    metadataBase: new URL('https://www.77vsl.com'),  // Actualizado con www
    openGraph: {
        title: '77 VSL',
        description: '2025 - 77 Venture Studio Labs.',
        url: 'https://www.77vsl.com',  // Actualizado con www
        siteName: '77 VSL',
        locale: 'es_ES',
        type: 'website',
        images: [
            {
                url: 'https://www.77vsl.com/static/images/logo-grayscale-inverted.png',
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
        images: ['https://www.77vsl.com/static/images/logo-grayscale-inverted.png'],
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function Layout(props: { children: React.ReactNode }) {
  return <MarketingLayout>{props.children}</MarketingLayout>
}
