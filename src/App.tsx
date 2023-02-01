import Navbar from './components/Navbar/Navbar'
import Admin from './pages/Admin/Admin'
import Home from './pages/Home/Home'
import { Container } from './styles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
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

export default App