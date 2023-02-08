import React from 'react'
import logo from '/logo.png'
import { AdminIcon, Container, Image, NavLink, Title, Wrapper } from './styles'
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
        </AdminIcon>
      </Link>
      <NavLink href="https://documenter.getpostman.com/view/21491822/2s935rJhbk" target="_blank">Docs</NavLink>
    </Container>
  )
}

export default Navbar