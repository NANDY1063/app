import React, { useState } from "react";
import "../App.css"; 

const Cardmode = () => {
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [showCardForm, setShowCardForm] = useState(false);
  const [cardNo, setCardNo] = useState("");
  const [name, setName] = useState("");
  const [isCustomer, setIsCustomer] = useState(false);
  const [cardMode, setCardMode] = useState("");
  const [discount, setDiscount] = useState("");
  const [validFrom, setValidFrom] = useState("");
  const [validTo, setValidTo] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [cardModeOptions, setCardModeOptions] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);
  
  const handleSave = () => {
    if (name.trim() !== "") {
      setCardModeOptions([...cardModeOptions, name.trim()]);
      setShowCardDetails(true);
    }
  };

  const handleCardNoChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 16);
    setCardNo(value);
  };

  const handleSubmit = () => {
    const newData = {
      name,
      isCustomer,
      cardNo,
      cardMode,
      discount,
      validFrom,
      validTo,
      isActive,
    };
    setSubmittedData([...submittedData, newData]);
    setCardNo("");
    setCardMode("");
    setDiscount("");
    setValidFrom("");
    setValidTo("");
    setIsActive(false);
    setShowCardDetails(false); 
    setShowCardForm(false); 
    alert("Card details submitted successfully!");
  };
  
  const handleClose = () => {
    setShowCardDetails(false); 
    setShowCardForm(false); 
  };

  const handleAddCardMode = () => {
    setShowCardForm(true); 
  };

  return (
  <div>
    <nav>
    <h5>Card</h5>      
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
      <button type="button" class="btn btn-outline-success" onClick={handleAddCardMode}>Add Section</button>
    </div>
    </nav>
      
    {showCardForm && (
      <div className={`card-row ${showCardDetails ? "two-columns" : ""}`}>
        <div className="card-column">
          <h6>Card Mode</h6>
          <div className="card-form-group">
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="card-form-group">
            <label>Is Customer:</label>
            <input type="checkbox" checked={isCustomer} onChange={(e) => setIsCustomer(e.target.checked)}/>
          </div>
          {!showCardDetails && ( 
            <div className="bu-group">
            <button className="btn btn-success " onClick={handleSave}>Save</button>
            <button className="btn btn-danger" onClick={handleClose}>Cancel</button>
            </div>
          )}
        </div>

    {showCardDetails && (
      <div className="card-column">
        <h6>Card</h6>
        <div className="card-form-group">
          <label>Card No:</label>
          <input type="text" value={cardNo} onChange={handleCardNoChange} maxLength="16"/>
          <label>Card Mode:</label>
          <select value={cardMode} onChange={(e) => setCardMode(e.target.value)} >
            <option value="">Select Mode</option>
              {cardModeOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
              ))}
          </select><br/>
          <label>Discount:</label>
          <input type="text" value={discount} onChange={(e) => setDiscount(e.target.value)}/>
          <label>Active:</label>
          <input type="checkbox" checked={isActive} onChange={(e) => setIsActive(e.target.checked)}/>
        </div>
        <div className="card-form-group">
          <label style={{textWrap:"wrap"}}>Valid From:</label>
          <input type="date" value={validFrom} onChange={(e) => setValidFrom(e.target.value)}/>
          <label>Valid To:</label>
          <input type="date" value={validTo}onChange={(e) => setValidTo(e.target.value)}/><br/>
          
        </div>
        <div className="bu-group">
          <button className="btn btn-success " onClick={handleSubmit}>Submit</button>
          <button className="btn btn-danger" onClick={handleClose}>Close</button>
        </div>
      </div>
    )}
  </div>
  )}

  {submittedData.length > 0 && (
    <div className="table-wrapper">
      <h6>Submitted Data</h6>
      <table>
        <thead>
          <tr>
          <th>Card No</th>
          <th>Card Mode</th>
          <th>Discount</th>
          <th>Valid From</th>
          <th>Valid To</th>
          <th>Active</th>
          </tr>
        </thead>
          <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.cardNo}</td>
                  <td>{data.cardMode}</td>
                  <td>{data.discount}</td>
                  <td>{data.validFrom}</td>
                  <td>{data.validTo}</td>
                  <td>{data.isActive ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cardmode;