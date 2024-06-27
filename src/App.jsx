import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import About from './pages/About';
import SignUp from './pages/SignUp';


const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sign-out" element={<SignUp />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/about" element={<About />} />
    </Routes>

  </Router>
}

export default App
