import {Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Toys } from './pages/Toys'
import { Electronics } from './pages/Electronics'
import { Tools } from './pages/Tools'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'
import {ShoppingCartProvider} from "./context/ShoppingCartContext"



function App() {
  return (
    
  <ShoppingCartProvider>
  <Navbar />
  
    <Container className="mb-4">
    <Routes>
      <Route path="/React_projects/ecommerce" element={<Home />} />
      <Route path="toys" element={<Toys />} />
      <Route path="electronics" element={<Electronics />} />
      <Route path="tools" element={<Tools />} />
      <Route path="about" element={<About />} />
    </Routes>
  </Container>
  
  </ShoppingCartProvider>
  
  )
}

export default App
