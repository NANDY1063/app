import React, { useState } from "react";
import sectionImg from "../assets/sectionimg.png";
import "../App.css";
const Section = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false); 
  const [parentSection, setParentSection] = useState("");
  const [name, setName] = useState("");
  const [mu, setMu] = useState("");
  const [sectionSize, setSectionSize] = useState([]);
  const [priceRange, setPriceRange] = useState("");
  const [mode, setMode] = useState("");
  const [mrpPrice, setMrpPrice] = useState([]);
  const [designType, setDesignType] = useState("");
  const [productName, setProductName] = useState("");
  const [productNo, setProductNo] = useState(" ");
  const [isFirstRowSaved, setIsFirstRowSaved] = useState(false);

  const handleAddSectionClick = () => {
    setShowForm(true);
  };

  const handleSave = () => {
    setShowDetails(true); 
    setIsFirstRowSaved(true);
  };

  const handleCancelClick = () => {
    setShowForm(false); 
    setShowDetails(false); 
    setIsFirstRowSaved(false);
  };

  const handleSubmit = () => {
    alert("Section details recorded successfully!");
  };

  const handleSectionSizeChange = (e) => {
    const selectedSizes = Array.from(e.target.selectedOptions, (option) => option.value);
    setSectionSize(selectedSizes); 
  };

  const handleMrpPriceChange = (e) => {
    const selectedPrices = Array.from(e.target.selectedOptions, (option) => option.value);
    setMrpPrice(selectedPrices); 
  };
  return (
  <div>
    <nav>
      <h5>Section</h5>      
    <div class ="navleft">
      <div class="btn-group ">
      <button type="button" class="btn btn-outline-secondary dropdown-toggle me-md-3" data-bs-toggle="dropdown" > Filter</button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Name</a></li>
          <li><a class="dropdown-item" href="#">Created from</a></li>
          <li><a class="dropdown-item" href="#">Created To</a></li>
          <li><a class="dropdown-item" href="#">Active</a></li>
        </ul>
      </div>
      <button type="button" class="btn btn-outline-success" onClick={handleAddSectionClick}>Add Section</button>
    </div>
    </nav>
 
  {showForm && (
  <div>
    <div className="first-row">
      <label>PARENT SECTION:</label>
      <select value={parentSection} onChange={(e) => setParentSection(e.target.value)}>
        <option value="">Select Parent</option>
        <option value="SILK">SILK</option>
        <option value="SAREE">SAREE</option>
        <option value="MENS">MENS</option>
        <option value="WOMENS">WOMENS</option>
      </select>
      <label>NAME:</label>
        <input type="text" value={name}  onChange={(e) => setName(e.target.value)}/>
      <label>MU:</label>
        <input  type="text" value={mu} onChange={(e) => setMu(e.target.value)}  />
      {!isFirstRowSaved && (
        <>
          <button className="btn btn-outline-success" onClick={handleSave}>Save</button>
          <button className="btn btn-outline-danger" onClick={handleCancelClick}>Cancel</button>
        </>
      )}
    </div>        
           
  {showDetails && (
  <div>
  <div className="second-row">
    <div className="column">
      <label>SECTION SIZE</label>
      <div className="dropdown-container">
      <select value={sectionSize} onChange={handleSectionSizeChange}> 
        <option value="">Choose...</option>
          {[32, 34, 36, 38, 40, 42, 44, 46, 48, 50].map((size) => (
        <option key={size} value={size}> {size} </option>   ))}
      </select> 
      </div>           
    </div>
{/* 0-3,3-6,6-12,1-2,2-3,4-5,6-7,8-9,10-11,12-13,XS,S,M,L,XL,XXL,XXXL,XXXL  */}
    <div className="column">
      <label>SECTION RANGE </label>
      <div className="dropdown-container">
      <select value={priceRange}  onChange={handleMrpPriceChange}>
        <option value="">Choose...</option>
        {[101, 201, 301, 401].map((range) => (
        <option key={range} value={range}> {range}-{range + 99} </option>
        ))}
      </select>
      </div>
    </div> 
      
    <div className="column">
      <label>SECTION MODE</label>
      <div className="dropdown-container"> 
      <select value={mode} onChange={(e) => setMode(e.target.value)}>
        <option value="">Choose...</option>
        {["High", "Luxury" ,"Premium","Costly", "Medium", "Low", "Affordable"].map((mode) => (
        <option key={mode} value={mode}>{mode}</option>
        ))}
      </select>
      </div>
    </div>        
               
    <div className="column">
      <label>MRP Price</label>
      <div className="dropdown-container"> 
      <select value={mode} onChange={(e) => setMode(e.target.value)}>
        <option value="">Choose...</option>
        {["1999", "2999", "3999", "4999", "5999"].map((mode) => (
        <option key={mode} value={mode}>{mode}</option>
        ))}
      </select>
      </div>
    </div>

    <div className="column">
      <label>PRODUCT CODE </label>
      <div className="colpro">
      <label>Type:  
      <select>
        <option>Choose...</option>
        <option>Branded</option>
        <option>Non Branded</option>
      </select>     
      </label>
      <label>Design Code : <input  type="text" value={designType} onChange={(e) => setDesignType(e.target.value)} /></label>
      <label>Product Name :<input  type="text" value={productName} onChange={(e) => setProductName(e.target.value)} /></label>
      <label>Product No : <input type="text" value={productNo}  onChange={(e) => setProductNo(e.target.value)} /> </label>            
      </div>
    </div>
    
    <button className="btn btn-outline-success " onClick={handleSubmit}>Submit</button>
    <button className="btn btn-outline-danger" onClick={handleCancelClick}>Cancel</button>    
   
    </div>
  </div>
  )}
  </div>
  )}
    
  {!showForm && <img src={sectionImg} alt="Section" className="section-image" />}
  </div>
  );
};
export default Section;