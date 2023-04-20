import {Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Toys } from './pages/Toys'
import { Electronics } from './pages/Electronics'
import { Tools } from './pages/Tools'
import { Pantry } from './pages/Pantry'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'
import {ShoppingCartProvider} from "./context/ShoppingCartContext"
import './styles_app.css'
import {Landing} from "./pages/Landing"
import {Budget} from "./components/Budget"

function App() {
  return (
    
  // Provider component gives entire app access to the Cart
  <ShoppingCartProvider>
  <Navbar />
  
    <Container className="mb-4">
    <Budget totalBudget={500} /> {/* add the Budget component */}
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/toys" element={<Toys />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/pantry" element={<Pantry />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Container>
  
  </ShoppingCartProvider>
  
  )
}

export default App
