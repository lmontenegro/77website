import { NextSeoProps } from 'next-seo'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: '77 VSL',
    description: '2025 - 77 Venture Studio Labs.',
  } as NextSeoProps,
  header: {
    links: [
      {
        id: 'features',
        label: 'Servicios',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Contáctanos',
        href: 'mailto:contacto@77vsl.com?subject=Consulta desde 77VSL&body=Hola, me gustaría obtener más información sobre sus servicios.',
        variant: 'primary',
      },
    ],
  },
  footer: {},
}

export default siteConfig
