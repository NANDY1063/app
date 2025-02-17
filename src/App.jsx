import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './components/Signup';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';  
import Section from './components/Section';
import Report from './components/Report';
import CardMode from './components/Cardmode';
import SupplierPortal from "./components/Supplierportal";
import Pricerange from "./components/Pricerange"; 
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />
          
          <Route element={<LayoutWithSidebar />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/master/section" element={<Section />} />
            <Route path="/reports" element={<Report/>}/>
            <Route path="/masters/supplier" element={<SupplierPortal/>}/>
            <Route path="/masters/card-mode" element={<CardMode/>}/>
            <Route path="/masters/price-range" element={<Pricerange/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

const LayoutWithSidebar = () => (
  <>
    <Sidebar />
    <div className="main-content">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/master/section" element={<Section />} />
        <Route path="/reports" element={<Report/>}/>
        <Route path="/masters/supplier" element={<SupplierPortal/>}/>
        <Route path="/masters/card-mode" element={<CardMode/>}/>
        <Route path="/masters/price-range" element={<Pricerange/>}/>
      </Routes>
    </div>
  </>
);

export default App;