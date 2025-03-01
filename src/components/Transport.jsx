import React, { useState } from "react";
import "../App.css";

const Transport = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [nameAsPerGST, setNameAsPerGST] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [pan, setPan] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleSave = () => {
    if (name.trim() !== "" && address.trim() !== "" && accountNumber.trim() !== "") {
      const newData = {
        name: name.trim(),
        address: address.trim(),
        accountNumber: accountNumber.trim(),
        bankName: bankName.trim(),
        gstNumber: gstNumber.trim(),
        nameAsPerGST: nameAsPerGST.trim(),
        country: country.trim(),
        city: city.trim(),
        state: state.trim(),
        accountHolderName: accountHolderName.trim(),
        branchName: branchName.trim(),
        ifscCode: ifscCode.trim(),
        pan: pan.trim(),
        isActive,
      };
      setSubmittedData(newData);
      setShowForm(false);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      alert("Name, Address, and Account Number are required fields!");
    }
  };

  const handleCancel = () => {
    setName("");
    setAddress("");
    setAccountNumber("");
    setBankName("");
    setGstNumber("");
    setNameAsPerGST("");
    setCountry("");
    setCity("");
    setAccountHolderName("");
    setState("");
    setBranchName("");
    setIfscCode("");
    setPan("");
    setIsActive(false);
    setShowForm(false);
  };

  const handleAddSection = () => {
    setShowForm(true);
  };

  return (
    <div>
      <nav>
        <h5>Transport</h5>
        <div className="navleft">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-outline-secondary dropdown-toggle me-md-3"
              data-bs-toggle="dropdown"
            >
              Filter
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Name
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Created from
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Created To
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Active
                </a>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={handleAddSection}
          >
            Add Transport
          </button>
        </div>
      </nav>

      {/* Bootstrap Alert */}
      {showAlert && (
        <div className="alert alert-success" role="alert">
          Transport details saved successfully!
        </div>
      )}

      {showForm && (
        <div className="mode-column">
          <div className="mode-grid">
            <div className="mode-grid-item">
              <label>Name </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
              />
            </div>
            <div className="mode-grid-item">
              <label>Mobile</label>
              <input type="text" placeholder="Enter Mobile" />
            </div>
            <div className="mode-grid-item">
              <label>Address </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Address"
              />
            </div>
            <div className="mode-grid-item">
              <label>Country </label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter Country"
              />
            </div>
            <div className="mode-grid-item">
              <label>State </label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Enter State"
              />
            </div>
            <div className="mode-grid-item">
              <label>City </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter City"
              />
            </div>
            <div className="mode-grid-item">
              <label>Account Holder Name </label>
              <input
                type="text"
                value={accountHolderName}
                onChange={(e) => setAccountHolderName(e.target.value)}
                placeholder="Enter Account Holder Name"
              />
            </div>
            <div className="mode-grid-item">
              <label>Account Number </label>
              <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                placeholder="Enter Account Number"
              />
            </div>
            <div className="mode-grid-item">
              <label>Bank Name </label>
              <input
                type="text"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                placeholder="Enter Bank Name"
              />
            </div>
            <div className="mode-grid-item">
              <label>GST Number </label>
              <input
                type="text"
                value={gstNumber}
                onChange={(e) => setGstNumber(e.target.value)}
                placeholder="Enter GST Number"
                maxLength={15}
              />
            </div>
            <div className="mode-grid-item">
              <label>Name as per GST </label>
              <input
                type="text"
                value={nameAsPerGST}
                onChange={(e) => setNameAsPerGST(e.target.value)}
                placeholder="Enter Name as per GST"
              />
            </div>
            <div className="mode-grid-item">
              <label>Branch Name </label>
              <input
                type="text"
                value={branchName}
                onChange={(e) => setBranchName(e.target.value)}
                placeholder="Enter Branch Name"
              />
            </div>
            <div className="mode-grid-item">
              <label>IFSC Code </label>
              <input
                type="text"
                value={ifscCode}
                onChange={(e) => setIfscCode(e.target.value)}
                placeholder="Enter IFSC Code"
              />
            </div>
            <div className="mode-grid-item">
              <label>PAN </label>
              <input
                type="text"
                value={pan}
                onChange={(e) => setPan(e.target.value)}
                placeholder="Enter PAN"
              />
            </div>
            <label className="mode-check">
              Active:{" "}
              <input
                type="checkbox"
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
              />{" "}
            </label>
          </div>
          <div className="bu-group">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {submittedData && (
        <div className="submitted-data">
          <h6>Submitted Data</h6>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>State</th>
                <th>City</th>
                <th>Account Holder Name</th>
                <th>Account Number</th>
                <th>Branch Name</th>
                <th>Bank Name</th>
                <th>IFSC Code</th>
                <th>GST Number</th>
                <th>Name as per GST</th>
                <th>PAN</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{submittedData.name}</td>
                <td>-</td>
                <td>{submittedData.address}</td>
                <td>{submittedData.state}</td>
                <td>{submittedData.city}</td>
                <td>{submittedData.accountHolderName}</td>
                <td>{submittedData.accountNumber}</td>
                <td>{submittedData.branchName}</td>
                <td>{submittedData.bankName}</td>
                <td>{submittedData.ifscCode}</td>
                <td>{submittedData.gstNumber}</td>
                <td>{submittedData.nameAsPerGST}</td>
                <td>{submittedData.pan}</td>
                <td>{submittedData.isActive ? "Yes" : "No"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Transport;