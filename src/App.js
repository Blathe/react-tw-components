import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/index'
import About from './pages/about'
import Contact from './pages/contact'

import SideNavbar from './components/Navbar/SideNavbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
            <div className="flex flex-row">
            <SideNavbar />
            <Routes>
              <Route exact path ='/' element={<Home />} />
              <Route exact path ='/about' element={<About />} />
              <Route exact path ='/contact' element={<Contact />} />
            </Routes>
            </div>
          </Router>
      </header>
    </div>
  );
}

export default App;
