import React, { useState } from "react";
import "../App.css";

const Branch = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [nameAsPerGST, setNameAsPerGST] = useState("");
  const [branchCode, setBranchCode] = useState("");
  const [mobile, setMobile] = useState("");
  const [pan, setPan] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [showAlert, setShowAlert] = useState(false); // State for showing alert

  const handleSave = () => {
    if (
      name.trim() !== "" &&
      branchCode.trim() !== "" &&
      mobile.trim() !== "" &&
      address.trim() !== "" &&
      gstNumber.trim() !== "" &&
      nameAsPerGST.trim() !== "" &&
      pan.trim() !== ""
    ) {
      const newData = {
        name: name.trim(),
        address: address.trim(),
        gstNumber: gstNumber.trim(),
        nameAsPerGST: nameAsPerGST.trim(),
        branchCode: branchCode.trim(),
        mobile: mobile.trim(),
        pan: pan.trim(),
        isActive,
      };
      setSubmittedData(newData);
      setShowForm(false);
      setShowAlert(true); // Show the alert
      setTimeout(() => setShowAlert(false), 3000); // Hide the alert after 3 seconds
    } else {
      alert("Please fill in all required fields!");
    }
  };

  const handleCancel = () => {
    setName("");
    setAddress("");
    setGstNumber("");
    setNameAsPerGST("");
    setBranchCode("");
    setMobile("");
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
        <h5>Branch</h5>
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
            Add Branch
          </button>
        </div>
      </nav>

      {/* Bootstrap Alert */}
      {showAlert && (
        <div className="alert alert-success" role="alert">
          Branch details saved successfully!
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
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter Mobile"
                maxLength={10}
              />
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
              <label>Branch Code</label>
              <input
                type="text"
                value={branchCode}
                onChange={(e) => setBranchCode(e.target.value)}
                placeholder="Enter Branch Code"
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
              <label>PAN </label>
              <input
                type="text"
                value={pan}
                onChange={(e) => setPan(e.target.value)}
                placeholder="Enter PAN"
                maxLength={10}
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
              Submit
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
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Branch Code</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>GST No</th>
                <th>Name as per GST</th>
                <th>PAN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{submittedData.name}</td>
                <td>{submittedData.branchCode}</td>
                <td>{submittedData.mobile}</td>
                <td>{submittedData.address}</td>
                <td>{submittedData.gstNumber}</td>
                <td>{submittedData.nameAsPerGST}</td>
                <td>{submittedData.pan}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Branch;