import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from './styles'
import Navbar from './components/Navbar'
import Admin from './pages/Admin'
import Home from './pages/Home'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Container>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<Admin />} />
        </Routes>
        </Container>
  </BrowserRouter>
  )
}

