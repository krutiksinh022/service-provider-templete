import './App.css';
import {BrowserRouter as Router ,Route , Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Service from './components/Service';
function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        
        <Route path='/' element={<Home />}>
        
            
        </Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/service' element={<Service/>}></Route>
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
