import React from 'react'
import logo from '/logo.png'
import { Container, Image, Title, Wrapper } from './styles'
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
        <div style={{ fontSize: '30px', color: 'white'}}><RiAdminLine />
          </div></Link>
    </Container>
  )
}

export default Navbar