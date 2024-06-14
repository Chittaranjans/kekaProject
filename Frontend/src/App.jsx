import { useState } from 'react';
import Navbar from './components/Navbar';
import Frontpage from './components/Frontpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Bord from './components/Bord';
import Signin from './components/Signin';
import Login from './components/Login';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Router>
        <Routes> {/* Wrap Route with Routes */}
          <Route path='/' element={<Frontpage />} />
          <Route path='/front-page' element={<Bord />} />
          {/* Use element prop instead of component */}
          <Route path='/login' element={<Signin />} />
          <Route path='/signin' element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;