import { Box, Container, SimpleGrid, Image, Heading } from '@chakra-ui/react'
import { Section } from 'components/section'

export interface ClientsProps {
  title?: string
  clients: Array<{
    name: string
    logo: string
  }>
}

export const Clients = ({ title, clients }: ClientsProps) => {
  return (
    <Section>
      {title && (
        <Heading
          as="h2"
          fontSize={['2xl', null, '4xl']}
          mb={8}
          textAlign="center"
        >
          {title}
        </Heading>
      )}
      <Container maxW="container.xl">
        <SimpleGrid
          columns={[2, 3, 5]}
          spacing={12}
          alignItems="center"
          justifyItems="center"
        >
          {clients.map((client, index) => (
            <Box key={index} maxW="150px" opacity={0.8} _hover={{ opacity: 1 }}>
              <Image
                src={client.logo}
                alt={client.name}
                style={{ filter: 'grayscale(100%)' }}
                _hover={{ filter: 'grayscale(0%)' }}
                transition="all 0.2s"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Section>
  )
} 