import { chakra, HTMLChakraProps } from '@chakra-ui/react'
import Image from 'next/image'

export const Logo: React.FC<HTMLChakraProps<'div'>> = (props) => {
  return (
    <chakra.div width="120px" height="60px" {...props}>
      <Image
        src="/static/images/logo.png" // Ajusta esta ruta según donde coloques tu imagen
        alt="Logo"
        width={120}
        height={60}
        style={{ objectFit: 'contain' }}
      />
    </chakra.div>
  )
}
