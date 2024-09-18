
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Hire from './components/hire/Hire'
import Home from './components/home/Home'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'

function App() {

  return (
  <div>
     <Nav />
        <Routes>

    <Route path="/hire" element={<Hire/>} />
   <Route path="/" element={<Home />} />
   <Route path="/about" element={<About />} />
   <Route path="/portfolio" element={<Portfolio />} />

   </Routes>
   
   <Footer />
   </div>
  )
}

export default App
