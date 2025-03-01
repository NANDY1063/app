import React, { useState } from "react";
import "../App.css";

const Role = () => {
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [empNo, setEmpNo] = useState("");
  const [mobile, setMobile] = useState("");
  const [branch, setBranch] = useState("");
  const [currentBranch, setCurrentBranch] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [peopleList, setPeopleList] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [showAlert, setShowAlert] = useState(false); 

  const handleAddSectionClick = () => {
    setShowForm(true);
  };

  const handleSave = () => {
    if (role.trim() === "") {
      alert("Role is required!");
      return;
    }
    setShowDetails(true);
  };

  const handleAddPerson = () => {
    if (
      name.trim() === "" ||
      empNo.trim() === "" ||
      mobile.trim() === "" ||
      branch.trim() === "" ||
      currentBranch.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      alert("All fields are required!");
      return;
    }
    const newPerson = {
      role,
      name,
      empNo,
      mobile,
      branch,
      currentBranch,
      email,
      password,
    };
    setPeopleList([...peopleList, newPerson]);
    setName("");
    setEmpNo("");
    setMobile("");
    setBranch("");
    setCurrentBranch("");
    setEmail("");
    setPassword("");
  };

  const handleCancelClick = () => {
    setShowForm(false);
    setShowDetails(false);
  };

  const handleSubmit = () => {
    if (peopleList.length === 0) {
      alert("Please add at least one person!");
      return;
    }
    setShowTable(true);
    setShowForm(false);
    setShowDetails(false);
    setRole("");
    setShowAlert(true); 
    setTimeout(() => setShowAlert(false), 3000); 
  };

  return (
    <div>
      <nav>
        <h5>Role</h5>
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
            onClick={handleAddSectionClick}
          >
            Add Role
          </button>
        </div>
      </nav>

      {/* Bootstrap Alert */}
      {showAlert && (
        <div className="alert alert-success" role="alert">
          Form submitted successfully!
        </div>
      )}

      {showTable && (
        <div className="submitted-data">
          <h6>Submitted Data</h6>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Role</th>
                <th>Name</th>
                <th>Emp No</th>
                <th>Mobile</th>
                <th>Current Branch</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {peopleList.map((person, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{person.role}</td>
                  <td>{person.name}</td>
                  <td>{person.empNo}</td>
                  <td>{person.mobile}</td>
                  <td>{person.currentBranch}</td>
                  <td>{person.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showForm && (
        <div>
          <div className="first-row">
            <label>Role:</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
            <button
              className="btn btn-outline-success mx-5"
              onClick={handleSave}
            >
              +
            </button>
          </div>
          {showDetails && (
            <div className="first-row">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>EmpNo:</label>
              <input
                type="empno"
                value={empNo}
                onChange={(e) => setEmpNo(e.target.value)}
                maxLength={5}
              />
              <label>Mobile:</label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                maxLength={10}
              />
              <label>Branch:</label>
              <select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              >
                <option selected>Choose</option>
                <option>Main Branch</option>
                <option>CBE 3</option>
                <option>KGR</option>
                <option>HSR</option>
              </select>
              <label>Current Branch:</label>
              <select
                value={currentBranch}
                onChange={(e) => setCurrentBranch(e.target.value)}
              >
                <option selected>Choose</option>
                <option>Main Branch</option>
                <option>CBE 3</option>
                <option>KGR</option>
                <option>HSR</option>
              </select>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="btn btn-outline-success"
                onClick={handleAddPerson}
              >
                +
              </button>
            </div>
          )}
          <div className="bu-group">
            <button className="btn btn-success" onClick={handleSubmit}>
              Submit
            </button>
            <button
              className="btn btn-danger mx-5"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Role;