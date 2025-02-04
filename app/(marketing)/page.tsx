'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'
import clients from '#data/clients'
import { Clients } from '#components/clients/clients'

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <Box py={16}>
        <Clients {...clients} />
      </Box>

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                End-to-end en desarrollo de aplicaciones con un equipo de especialistas
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Somos el mejor aliado para llevar a cabo tus ideas
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
 
              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="mailto:contacto@77vsl.com?subject=Consulta desde 77VSL&body=Hola, me gustaría obtener más información sobre sus servicios.">
                  Contáctanos
                </ButtonLink>
                
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a dashboard template"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Acesible',
            icon: FiSmile,
            description: 'Desarrollamos software pensando en la usabilidad y la experiencia del usuario, asegurando que las aplicaciones sean intuitivas, funcionales y accesibles para todos.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Personalizable',
            icon: FiSliders,
            description:
              'Creamos soluciones tecnológicas adaptadas a tu negocio, con interfaces y funcionalidades totalmente ajustables a tu identidad de marca..',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Flexible',
            icon: FiGrid,
            description:
              'Construimos arquitecturas modulares y componibles, permitiendo la integración y evolución de tu software según las necesidades de tu empresa..',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Eficiente',
            icon: FiThumbsUp,
            description:
              'Optimizamos el desarrollo con buenas prácticas, reducción de código repetitivo y herramientas tipadas para acelerar el tiempo de entrega..',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="5+ años de experiencia">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
          Contamos con más de 5 años de experiencia desarrollando soluciones tecnológicas a medida, ayudando a empresas a mejorar su productividad, optimizar procesos y alcanzar sus objetivos.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                pnpm add
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                @77-vsl
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Fundamentos sólidos">
        <Text color="muted" fontSize="lg">
        Un equipo de expertos altamente capacitados, comprometidos con la excelencia en cada proyecto.
        </Text>
      </HighlightsItem>
      <HighlightsItem title="24+ proyectos realizados">
        <Text color="muted" fontSize="lg">
        Más de 24 proyectos completados exitosamente, creando soluciones que impulsan el crecimiento de nuestros clientes.
        </Text>
      </HighlightsItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Contamos con las últimas tendencias en tecnología."
      >
        <Text color="muted" fontSize="lg">
        Nos mantenemos a la vanguardia de las últimas tendencias tecnológicas, y con nuestro equipo podrás implementar las soluciones más innovadoras de la actualidad.
        </Text>
        <Wrap mt="8">
          {[
            'authentication',
            'multicloud',
            'APIaaS',
            'IA',
            'multi-tenancy',
            'agents',
            'billing',
            'development',
            'SaaS',
            'documentation',
            'onboarding',
            'storybooks',
            'integrations',
            'upselling',
            'unit testing',
            'feature flags',
            'responsiveness',
            'assistants',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Desarrollo de Productos y Soluciones a Medida
        </Heading>
      }
      description={
        <>
          Ofrecemos un enfoque integral que no solo se centra en el desarrollo de productos innovadores y a medida, sino que también brindamos una amplia gama de servicios propios.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Implementación estratégica de IA.',
          icon: FiBox,
          description:
            'Aplicamos inteligencia artificial para optimizar procesos, mejorar decisiones y potenciar la automatización..',
          variant: 'inline',
        },
        {
          title: 'Software a medida para tu negocio.',
          icon: FiLock,
          description:
            'Desarrollamos plataformas de gestión eficientes para optimizar operaciones, automatizar procesos y mejorar la toma de decisiones..',
          variant: 'inline',
        },
        {
          title: 'Agentes de WhatsApp para auto atención.',
          icon: FiSearch,
          description:
            'Implementamos bots inteligentes que mejoran la experiencia del cliente, resolviendo consultas y automatizando interacciones..',
          variant: 'inline',
        },
        {
          title: 'Soporte y mantenimiento de sistemas legacy.',
          icon: FiUserPlus,
          description:
            'Garantizamos la estabilidad y continuidad de tus sistemas con mantenimiento preventivo y soporte técnico..',
          variant: 'inline',
        },
        {
          title: 'Outsourcing IT.',
          icon: FiFlag,
          description:
            "Potencia tu equipo con nuestros desarrolladores expertos, asegurando talento especializado sin complicaciones..",
          variant: 'inline',
        },
        {
          title: 'Modernización y migración de software.',
          icon: FiTrendingUp,
          description:
            'Transformamos sistemas heredados con tecnología moderna para mejorar rendimiento, seguridad y escalabilidad..',
          variant: 'inline',
        },
        {
          title: 'Consultoría en implementación de IA.',
          icon: FiToggleLeft,
          description:
            'Te ayudamos a elegir e implementamos la mejor IA para tu negocio.',
          variant: 'inline',
        },
        {
          title: 'Inteligencia de Negocios (BI).',
          icon: FiTerminal,
          description:
            'Transformamos datos en información estratégica con soluciones BI a medida, facilitando la toma de decisiones basadas en análisis en tiempo real..',
          variant: 'inline',
        },
        {
          title: 'Monorepo.',
          icon: FiCode,
          description: (
            <>
              All code is available as packages in a high-performance{' '}
              <Link href="https://turborepo.com">Turborepo</Link>, you have full
              control to modify and adjust it to your workflow.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
