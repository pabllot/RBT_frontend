import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Container } from './styles'

const App = () => {
  return (
    <Container>
      <Navbar />
      <Home />
    </Container>
  )
}

export default App