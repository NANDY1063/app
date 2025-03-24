import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './components/Signup';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import BillingScreen from './components/BillingScreen'
import Dashboard from './components/Dashboard';  
import Section from './components/Section';
import Report from './components/Report';
import CardMode from './components/Cardmode';
import SupplierPortal from "./components/Supplierportal";
import Pricerange from "./components/Pricerange"; 
import Eancode from "./components/Eancode";
import ModeCategory from "./components/ModeCategory"; 
import Hsn from "./components/Hsncode";
import Design from "./components/Designcode";
import Paymentmachine from "./components/Paymentmachine";
import Transport from "./components/Transport";
import Brand from "./components/Brand";
import Role from "./components/Role";
import Branch from "./components/Branch";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route element={<LayoutWithSidebar />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/master/section" element={<Section />} />
            <Route path="/reports" element={<Report/>}/>
            <Route path="/masters/supplier" element={<SupplierPortal/>}/>
            <Route path="/masters/card-mode" element={<CardMode/>}/>
            <Route path="/masters/price-range" element={<Pricerange/>}/>
            <Route path="/masters/mode-category" element={<ModeCategory/>}/>
            <Route path="/masters/ean-code" element={<Eancode/>}/>
            <Route path="/masters/hsn-code" element={<Hsn/>}/>
            <Route path="/masters/design-code" element={<Design/>}/> 
            <Route path="/masters/payment" element={<Paymentmachine/>}/>
            <Route path="/masters/transport" element={<Transport/>}/>
            <Route path="/masters/brand" element={<Brand/>}/>
            <Route path="/masters/role" element={<Role/>}/> 
            <Route path="/masters/branch" element={<Branch/>}/>
            <Route path="/billing" element={<BillingScreen/>}/>
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
        <Route path="/masters/mode-category" element={<ModeCategory/>}/>
        <Route path="/masters/ean-code" element={<Eancode/>}/>
        <Route path="/masters/hsn-code" element={<Hsn/>}/> 
        <Route path="/masters/design-code" element={<Design/>}/>
        <Route path="/masters/payment" element={<Paymentmachine/>}/>
        <Route path="/masters/transport" element={<Transport/>}/>
        <Route path="/masters/brand" element={<Brand/>}/>
        <Route path="/masters/role" element={<Role/>}/> 
        <Route path="/masters/branch" element={<Branch/>}/>
        <Route path="/billing" element={<BillingScreen/>}/>
      </Routes>
    </div>
  </>
);

export default App;