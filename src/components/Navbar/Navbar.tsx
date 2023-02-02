import React from 'react'
import logo from '/logo.png'
import { AdminIcon, Container, Image, Title, Wrapper } from './styles'
import { Link } from 'react-router-dom'
import { RiAdminLine } from 'react-icons/ri'

const Navbar = () => {
  return (
    <Container>
      <Link to='/' style={{textDecoration: 'none'}}>
        <Wrapper>
            <Image src={logo} alt='rbt logo' />
            <Title>RBT Pizzaria</Title>
        </Wrapper>
      </Link>
      <Link to='/admin'>
        <AdminIcon>
          <RiAdminLine />
        </AdminIcon></Link>
    </Container>
  )
}

export default Navbar