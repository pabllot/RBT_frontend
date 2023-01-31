import React from 'react'
import logo from '/logo.png'
import { Container, Image } from './styles'

const Navbar = () => {
  return (
    <Container>
      <Image src={logo} alt='rbt logo' />
    </Container>
  )
}

export default Navbar