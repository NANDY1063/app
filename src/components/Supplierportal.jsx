import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import axios from "axios"; // Import axios for API calls

const InputField = ({ label, type, name, value, onChange, onBlur, readOnly, rows, as, ...props }) => {
  const InputComponent = as || "input";
  return (
    <div className="form-group">
      <label>{label}</label>
      <InputComponent
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        readOnly={readOnly}
        rows={rows}
        className="form-control"
        {...props}
      />
    </div>
  );
};

const SupplierPortal = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    registerNo: "",
    businessType: "wholesaler",
    name: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    district: "",
    accHolderName: "",
    accNo: "",
    ifscCode: "",
    bankName: "",
    branch: "",
    section: "",
    minOrderQty: "",
    transportation: "",
  });

  const [showAlert, setShowAlert] = useState(false); // State for showing alert

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchBankDetails = async () => {
    if (formData.ifscCode.length === 11) {
      try {
        const response = await axios.get(
          `https://ifsc.razorpay.com/${formData.ifscCode}`
        );
        setFormData({
          ...formData,
          bankName: response.data.BANK,
          branch: response.data.BRANCH,
        });
      } catch (error) {
        alert("Invalid IFSC Code");
      }
    }
  };

  const handleAddSectionClick = () => {
    console.log("Add Section clicked");
    // Add logic for adding a section here
  };

  const handleSubmit = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
    console.log("Form Data Submitted:", formData); // Log form data to console
  };

  return (
    <div>
      <nav>
        <h5>Supplier Portal</h5>
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
            Add Supplier
          </button>
        </div>
      </nav>

      <div className="form-container-supplier">
        {showAlert && (
          <div className="alert alert-success" role="alert">
            Form submitted successfully!
          </div>
        )}
        <h5>Company Details</h5>
        <hr />
        <div className="form-supplier">
          <InputField
            label="Company Name"
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
          <InputField
            label="Supplier Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            label="Register No"
            type="text"
            name="registerNo"
            value={formData.registerNo}
            onChange={handleChange}
          />
          <InputField label="Group Section" />
          <InputField
            label="Section"
            type="text"
            name="section"
            value={formData.section}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="form-supplier">
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            label="Phone"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <InputField
            label="Address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <InputField
            label="State"
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
          <InputField
            label="District"
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
          />
          <InputField
            label="Transportation"
            type="text"
            name="transportation"
            value={formData.transportation}
            onChange={handleChange}
          />
        </div>
        <br />
        <h5>Bank Details</h5>
        <hr />
        <div className="form-supplier">
          <InputField
            label="Account Holder Name"
            type="text"
            name="accHolderName"
            value={formData.accHolderName}
            onChange={handleChange}
          />
          <InputField
            label="Account No"
            type="text"
            name="accNo"
            value={formData.accNo}
            onChange={handleChange}
          />
          <InputField
            label="IFSC Code"
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onBlur={fetchBankDetails}
            onChange={handleChange}
          />
          <InputField
            label="Bank Name"
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
          />
          <InputField
            label="Branch"
            type="text"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
          />
          <InputField
            label="Name as per GST"
            type="text"
            name="gstName"
            value={formData.gstName}
            onChange={handleChange}
          />
          <InputField
            label="GST No"
            type="text"
            name="gstNo"
            value={formData.gstNo}
            onChange={handleChange}
          />
          <InputField
            label="PAN No"
            type="text"
            name="panNo"
            value={formData.panNo}
            onChange={handleChange}
          />
        </div>
        <div className="bu-group">
          <button className="btn btn-success" onClick={handleSubmit}>
            Submit
          </button>
          <button className="btn btn-warning">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SupplierPortal;