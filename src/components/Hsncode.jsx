import React, { useState } from "react";
import "../App.css";

const HsnCode = () => {
  const [showForm, setShowForm] = useState(false);
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [showAlert, setShowAlert] = useState(false); // State for showing alert

  const handleSave = () => {
    if (code.trim() !== "") {
      const newData = {
        code: code.trim(),
        description: description.trim(),
        isActive,
      };
      setSubmittedData(newData);
      setShowForm(false);
      setShowAlert(true); // Show the alert
      setTimeout(() => setShowAlert(false), 3000); // Hide the alert after 3 seconds
    } else {
      alert("Code is a required field!");
    }
  };

  const handleCancel = () => {
    setCode("");
    setDescription("");
    setIsActive(false);
    setShowForm(false);
  };

  const handleAddSection = () => {
    setShowForm(true);
  };

  return (
    <div>
      <nav>
        <h5>HSN Code</h5>
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
            Add HSN Code
          </button>
        </div>
      </nav>

      {/* Bootstrap Alert */}
      {showAlert && (
        <div className="alert alert-success" role="alert">
          HSN Code saved successfully!
        </div>
      )}

      {showForm && (
        <div className="mode-column">
          <div className="mode-form">
            <label>Code:</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter Code"
            />
            <label>Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description"
            />
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
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Description</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{submittedData.code}</td>
                <td>{submittedData.description}</td>
                <td>{submittedData.isActive ? "Yes" : "No"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default HsnCode;