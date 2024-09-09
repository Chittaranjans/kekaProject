import React, { useState } from 'react'; // Add React and useState import
import Navbar from './components/Navbar';
import Frontpage from './components/Frontpage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Bord from './components/Bord';
import Signin from './components/Signin';
import Login from './components/Login';
import { useAuth } from './components/context.jsx';

function App() {
  const auth = useAuth();
  const [count, setCount] = useState(0); // Ensure useState is imported from 'react'
  const [userData, setUserData] = useAuth();
  console.log(auth);
  console.log(userData);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Frontpage />} />
        <Route path='/bord' element={userData ? <Bord /> : <Navigate to="/" replace />} />
        {/* Added replace prop to Navigate for better navigation handling */}
        <Route path='/login' element={<Signin />} />
        <Route path='/signin' element={<Login />} />
      </Routes>

    </>
  );
}

export default App;