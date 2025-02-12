import { Metadata } from 'next'
import { MarketingLayout } from '#components/layout'

export const metadata: Metadata = {
    title: '77 VSL - Software Factory & AI Solutions',
    description: 'Expertos en desarrollo de software a medida, implementación de IA y soluciones tecnológicas innovadoras. Transformamos ideas en productos digitales exitosos.',
    metadataBase: new URL('https://www.77vsl.com'),
    keywords: 'desarrollo de software, inteligencia artificial, AI, software factory, desarrollo web, aplicaciones móviles, consultoría IT, transformación digital, automatización, chatbots',
    openGraph: {
        title: '77 VSL - Innovación en Software & IA',
        description: 'Desarrollamos soluciones tecnológicas personalizadas con IA para impulsar el crecimiento de tu negocio. Expertos en software a medida y transformación digital.',
        url: 'https://www.77vsl.com',
        siteName: '77 VSL',
        locale: 'es_ES',
        type: 'website',
        images: [
            {
                url: 'https://www.77vsl.com/static/images/logo-og.png',
                width: 1200,
                height: 630,
                alt: '77 VSL - Software Factory & AI Solutions',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '77 VSL - Software & IA',
        description: 'Soluciones tecnológicas innovadoras con IA. Desarrollo de software personalizado para transformar tu negocio.',
        images: ['https://www.77vsl.com/static/images/logo-og.png'],
        creator: '@77vsl',
        site: '@77vsl',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'tu-código-de-verificación-de-google',
    },
    alternates: {
        canonical: 'https://www.77vsl.com',
    },
    authors: [
        { name: '77 VSL Team' }
    ],
    category: 'technology',
}

export default function Layout(props: { children: React.ReactNode }) {
  return <MarketingLayout>{props.children}</MarketingLayout>
}
