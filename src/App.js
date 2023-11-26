import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './styles.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from './components/Navbar';
import LoginForm from './components/LoginForm';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Referrals from './components/Referral';
import RefereeDetails from './components/RefereeDetails';
import NewCustomer from './components/NewCustomer';

function App() {
  const isSignedIn = true; // You can set the signed-in state as needed

  return (
    <Router>
      <div className="App">
        <ResponsiveAppBar />
        <>
          <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<LoginForm />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/referrals" element={<Referrals />} />
            <Route path="/referrals/:id" element={<RefereeDetails />} />
            <Route path="/new-customer" element={<NewCustomer />} />
          </Routes>
        </>
      </div>
    </Router>
  );
}

export default App;
