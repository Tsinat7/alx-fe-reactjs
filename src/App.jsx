<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
// Optional: import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ paddingBottom: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      {/* Optional <Footer /> */}
    </BrowserRouter>
=======
import Header from './Header';
import Dashboard from './Dashboard';
import UserProvider from './context/UserProvider';

function App() {
  return (
    <UserProvider>
      <Header />
      <Dashboard />
    </UserProvider>
>>>>>>> ea895c5f32aa7a231eb8963efc3624883c53cbf1
  );
}

export default App;