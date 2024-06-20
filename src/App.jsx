import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {Home, Sobre, Projetos, Contact} from './pages';
import Navbar from "./components/Navbar";



const App = () => {
  return (
    <main className="bg-slate-300/200">
       
        <Router>
            <Navbar/>
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/sobre" element = {<Sobre />} />
                <Route path = "/projetos" element = {<Projetos />} />
                <Route path = "/contact" element = {<Contact />} />
            </Routes>
        </Router>
    </main>
  )
}

export default App
