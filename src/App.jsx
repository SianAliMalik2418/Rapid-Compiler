
import HeroSection from "./components/HeroSection"
import Navbar from './components/Navbar';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import LanguageSection from './components/LanguageSection';
import Footer from './components/Footer';



function App() {



  return (
    <div  className="scroll-container bg-gradient-to-r from-[#f21b3f] to-[#441466]  overflow-x-hidden">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HeroSection />}/>
          <Route path='/language' element={<LanguageSection />}/>
        </Routes>
        <Footer/>
      </Router>

    </div>
  )
}

export default App
