import { useState } from 'react';
import Navbar from './components/Navbar';
import Frontpage from './components/Frontpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Bord from './components/Bord';

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
        </Routes>
      </Router>
    </>
  );
}

export default App;