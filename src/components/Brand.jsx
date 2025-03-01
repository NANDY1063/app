import React, { useState } from "react";
import "../App.css";

const Brand = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [showAlert, setShowAlert] = useState(false); // State for showing alert

  const handleSave = () => {
    if (name.trim() !== "" && id.trim() !== "") {
      const newData = {
        name: name.trim(),
        id: id.trim(),
        description: description.trim(),
        isActive,
      };
      setSubmittedData(newData);
      setShowForm(false);
      setShowAlert(true); // Show the alert
      setTimeout(() => setShowAlert(false), 3000); // Hide the alert after 3 seconds
    } else {
      alert("Name and ID are required fields!");
    }
  };

  const handleCancel = () => {
    setName("");
    setId("");
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
        <h5>Brand</h5>
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
            Add Brand
          </button>
        </div>
      </nav>

      {/* Bootstrap Alert */}
      {showAlert && (
        <div className="alert alert-success" role="alert">
          Brand details saved successfully!
        </div>
      )}

      {showForm && (
        <div className="mode-column">
          <div className="mode-form">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />
            <label>ID:</label>
            <input
              type="tel"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter ID"
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
                <th>ID</th>
                <th>Description</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{submittedData.name}</td>
                <td>{submittedData.id}</td>
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

export default Brand;