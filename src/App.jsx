import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Signin from './pages/Signin.jsx';
import Profile from './pages/Profile.jsx';
import About from './pages/About.jsx';
import Signup from './pages/Signup.jsx';
import Header from './components/Header.jsx';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>

  );
}
