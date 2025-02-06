import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
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
