import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "../App.css"; 

const Sidebar = () => {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const [isMastersDropdownOpen, setIsMastersDropdownOpen] = useState(false);
const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
const toggleMastersDropdown = () => {
  setIsMastersDropdownOpen((prevState) => !prevState);
};

return (
  <div className="side">
  <div id="bar">
    <button id="openSidebar" onClick={toggleSidebar}>☰</button>
  </div>
  <div id="sidebar" className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
    <button id="closeSidebar" className="close-btn" onClick={toggleSidebar}>&times;</button>
    <Link to="/dashboard" className="sidebar-item">Dashboard</Link>
    <Link to="/total-cash-receiving" className="sidebar-item">Total Cash Receiving</Link>
    <Link to="/billing" className="sidebar-item">Billing</Link>
    <Link to="/billing" className="sidebar-item">Bill Cancellation</Link>
    <Link to="/exchange" className="sidebar-item">Exchange</Link>
    <Link to="/exchange" className="sidebar-item">Exchange to Section</Link>
    <Link to="/godown-to-section" className="sidebar-item">Godown To Section</Link>
    <Link to="/godown-inventory" className="sidebar-item">Godown Inventory</Link>
    <Link to="/gate-pass-entry" className="sidebar-item">Gate Pass Entry</Link>
    <Link to="/purchase-entry" className="sidebar-item">Purchase Entry</Link>
    <Link to="/purchase-order" className="sidebar-item">Purchase Order</Link>
    <Link to="/purchase-order" className="sidebar-item">Order Form</Link>
    <Link to="/product-requirement" className="sidebar-item">Product Requirement</Link>
    <Link to="/supplier-payment" className="sidebar-item">Supplier Payment</Link>
    <Link to="/customer" className="sidebar-item">Customer</Link>
    <Link to="/reports" className="sidebar-item">Reports</Link>
  <div className="dropdown">
    <button className="dropdown-btn" onClick={toggleMastersDropdown}>Masters ▼ </button>
      <div className={`dropdown-content ${isMastersDropdownOpen ? "show" : ""}`}>
        <Link to="/masters/role"className="sidedrop">Role</Link>
        <Link to="/masters/branch"className="sidedrop">Branch</Link>
        <Link to="/masters/supplier" className="sidedrop">Supplier</Link> 
        <Link to="/masters/brand" className="sidedrop">Brand</Link>
        <Link to="/master/section" className="sidedrop">Section</Link>  
        <Link to="/masters/design-code"className="sidedrop">Design Code</Link>
        <Link to="/masters/hsn-code"className="sidedrop">Hsn Code</Link>
        <Link to="/masters/ean-code"className="sidedrop">Ean Code</Link>
        <Link to="/masters/card-mode" className="sidedrop">Card Mode</Link>
        <Link to="/masters/mode-category"className="sidedrop">Mode Category</Link>
        <Link to="/masters/price-range"className="sidedrop">Price</Link>
        <Link to="/masters/transport"className="sidedrop">Transport</Link> 
        <Link to="/masters/payment"className="sidedrop">Payment Machine</Link>
        <Link to="/masters/purchase-ratio"className="sidedrop">Purchase Ratio</Link>
        <Link to= "/masters/carton" className="sidedrop">Cartoon</Link>
        <Link to="/masters/section-rol"className="sidedrop">Section Rol</Link>
        <Link to="/masters/product-rol"className="sidedrop">Product Rol</Link>

        <Link to="/masters/payment"className="sidedrop"></Link>
        <Link to="/masters/purchase-ratio"className="sidedrop"></Link>
        <Link to= "/masters/carton" className="sidedrop"></Link>
        <Link to="/masters/payment"className="sidedrop"></Link>
        <Link to="/masters/purchase-ratio"className="sidedrop"></Link>
        <Link to= "/masters/carton" className="sidedrop"></Link>
        <Link to="/masters/payment"className="sidedrop"></Link>
        <Link to="/masters/purchase-ratio"className="sidedrop"></Link>
        <Link to= "/masters/carton" className="sidedrop"></Link>
        <Link to="/masters/payment"className="sidedrop"></Link>
        <Link to="/masters/purchase-ratio"className="sidedrop"></Link>
        <Link to= "/masters/carton" className="sidedrop"></Link>
        <Link to="/masters/payment"className="sidedrop"></Link>
        <Link to="/masters/purchase-ratio"className="sidedrop"></Link>
        <Link to= "/masters/carton" className="sidedrop"></Link>
        <Link to="/masters/payment"className="sidedrop"></Link>
        <Link to="/masters/purchase-ratio"className="sidedrop"></Link>
        <Link to= "/masters/carton" className="sidedrop"></Link>
        <Link to="/masters/payment"className="sidedrop"></Link>
        <Link to="/masters/purchase-ratio"className="sidedrop"></Link>
      

      </div>
  </div>
  </div>
  </div>
  );
};
export default Sidebar;