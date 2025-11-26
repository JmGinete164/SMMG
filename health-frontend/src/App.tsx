import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Chatbot from './pages/Chatbot';
import Scheduling from './pages/Scheduling';
import MedicalHistory from './pages/MedicalHistory';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/chatbot"
          element={
            <Layout>
              <Chatbot />
            </Layout>
          }
        />

        <Route
          path="/scheduling"
          element={
            <Layout>
              <Scheduling />
            </Layout>
          }
        />

        <Route
          path="/history"
          element={
            <Layout>
              <MedicalHistory />
            </Layout>
          }
        />

        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
