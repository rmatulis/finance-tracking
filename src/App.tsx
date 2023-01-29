import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
// Layout
import NavBar from './components/layout/NavBar'

// Pages
import Dashboard from './components/pages/Dashboard';
import Profile from './components/auth/Profile'

// Not Found
import NoMatch from './components/errors/NotFound';
import HomePage from './components/pages/Home';
import IncomePage from './components/pages/Income';
import ExpensesPage from './components/pages/Expenses';

function App() {
  
  return (
    <div>
      <NavBar />
      <Routes>
          <Route path="/" element={<HomePage />} />


          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/income" element={<IncomePage />} />
          <Route path="/expenses" element={<ExpensesPage />} />


          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
