import {Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Toys } from './pages/Toys'
import { Electronics } from './pages/Electronics'
import { Tools } from './pages/Tools'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'
import {ShoppingCartProvider} from "./context/ShoppingCartContext"
import './styles_app.css'


function App() {
  return (
    
  <ShoppingCartProvider>
  <Navbar />
  
    <Container className="mb-4">
    <Routes>
      <Route path="/minions_store/home" element={<Home />} />
      <Route path="/minions_store/toys" element={<Toys />} />
      <Route path="/minions_store/electronics" element={<Electronics />} />
      <Route path="/minions_store/tools" element={<Tools />} />
      <Route path="/minions_store/about" element={<About />} />
    </Routes>
  </Container>
  
  </ShoppingCartProvider>
  
  )
}

export default App