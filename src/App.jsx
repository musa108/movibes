import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AutoTransitionPage from './components/auto-transition-page';
import TargetPage from './components/target-page';
import Proccesing from './components/procces/proccesing';
import Processed from './components/procces/processed';
import Confirmed from './components/procces/confirmed';
import Home from './components/home/Home';
import SignUp from './components/auth/sign-up';
import Login from './components/auth/Login';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AutoTransitionPage/>} />
        <Route path="/target-page" element={<TargetPage/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/proccesing" element={<Proccesing/>} />
        <Route path="/processed" element={<Processed/>} />
        <Route path="/confirmed" element={<Confirmed/>} />
        <Route path="/Home" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;

