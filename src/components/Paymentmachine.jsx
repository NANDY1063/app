import React, { useState } from "react";
import "../App.css";

const Paymentmachine = () => {
  const [showForm, setShowForm] = useState(false);
  const [paymentGateway, setPaymentGateway] = useState("");
  const [terminal, setTerminal] = useState("");
  const [deviceName, setDeviceName] = useState("");
  const [branch, setBranch] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [showAlert, setShowAlert] = useState(false); 

  const handleSave = () => {
    if (
      paymentGateway.trim() !== "" &&
      branch.trim() !== "" &&
      terminal.trim() !== "" &&
      deviceName.trim() !== ""
    ) {
      const newData = {
        paymentGateway: paymentGateway.trim(),
        terminal: terminal.trim(),
        branch: branch.trim(),
        deviceName: deviceName.trim(),
        isActive,
      };
      setSubmittedData(newData);
      setShowForm(false);
      setShowAlert(true); 
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      alert("Please fill in all required fields!");
    }
  };

  const handleCancel = () => {
    setPaymentGateway("");
    setDeviceName("");
    setBranch("");
    setTerminal("");
    setIsActive(false);
    setShowForm(false);
  };

  const handleAddSection = () => {
    setShowForm(true);
  };

  return (
    <div>
      <nav>
        <h5>Payment Machine </h5>
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
            Add Payment Machine
          </button>
        </div>
      </nav>

      {/* Bootstrap Alert */}
      {showAlert && (
        <div className="alert alert-success" role="alert">
          Payment machine details saved successfully!
        </div>
      )}

      {showForm && (
        <div className="mode-column">
          <div className="mode-grid">
            <div className="mode-grid-item">
              <label>Payment Gateway :</label>
              <input
                type="text"
                value={paymentGateway}
                onChange={(e) => setPaymentGateway(e.target.value)}
                placeholder="Enter payment gateway"
              />
            </div>
            <div className="mode-grid-item">
              <label>Terminal No :</label>
              <input
                type="text"
                value={terminal}
                onChange={(e) => setTerminal(e.target.value)}
                placeholder="Enter terminal number"
              />
            </div>
            <div className="mode-grid-item">
              <label>Device Name : </label>
              <input
                type="text"
                value={deviceName}
                onChange={(e) => setDeviceName(e.target.value)}
                placeholder="Enter device name "
              />
            </div>
            <div className="mode-grid-item">
              <label>Branch :</label>
              <input
                type="text"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                placeholder="Enter Branch "
              />
            </div>
            <label className="mode-check">
              {" "}
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
                <th>Payment Gateway</th>
                <th>Branch </th>
                <th>Terminal No</th>
                <th>Device Name</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{submittedData.paymentGateway}</td>
                <td>{submittedData.branch}</td>
                <td>{submittedData.terminal}</td>
                <td>{submittedData.deviceName}</td>
                <td>{submittedData.isActive ? "Yes" : "No"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Paymentmachine;