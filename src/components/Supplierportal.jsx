import React, { useState } from "react";
import axios from "axios";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const InputField = ({ label, type, name, value, onChange, onBlur, readOnly, rows, as, ...props }) => {
  const InputComponent = as || "input"; // Use 'textarea' if 'as' prop is provided
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
    location: { lat: 11.0168, lng: 76.9558 }, // Default location (Coimbatore)
  });

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

  const handleMapClick = (event) => {
    setFormData({
      ...formData,
      location: { lat: event.latLng.lat(), lng: event.latLng.lng() },
    });
  };

  return (
    <div className="supp-container">
      <div className="tcr">
        <h5>Company Details</h5>
      </div>
      <div className="form-container">
        {/* Company Details Section */}
        <div className="form-grid">
          <InputField label="Company Name" type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
          <InputField label="Supplier Name" type="text" name="name" value={formData.name} onChange={handleChange} />
          <InputField label="Register No" type="text" name="registerNo" value={formData.registerNo} onChange={handleChange} />
          <div className="form-group">
            <label>Business Type</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="businessType"
                  value="wholesaler"
                  checked={formData.businessType === "wholesaler"}
                  onChange={handleChange}
                />
                Wholesaler
              </label>
              <label>
                <input
                  type="radio"
                  name="businessType"
                  value="manufacturer"
                  checked={formData.businessType === "manufacturer"}
                  onChange={handleChange}
                />
                Manufacturer
              </label>
            </div>
          </div>
        </div>

        {/* Address and Contact Section */}
        <div className="form-grid">
          <InputField label="Address" as="textarea" rows={2} name="address" value={formData.address} onChange={handleChange} />
          <InputField label="State" type="text" name="state" value={formData.state} onChange={handleChange} />
          <InputField label="District" type="text" name="district" value={formData.district} onChange={handleChange} />
          <div className="form-group">
            <InputField label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
            <button className="btn btn-secondary btn-sm mt-2">Verify Email</button>
          </div>
          <div className="form-group">
            <InputField label="Phone" type="text" name="phone" value={formData.phone} onChange={handleChange} />
            <button className="btn btn-secondary btn-sm mt-2">Verify Phone</button>
          </div>
        </div>

        {/* Map Section */}
        <h2>Locate on Map</h2>
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={{ height: "300px", width: "100%", marginBottom: "20px" }}
            center={formData.location}
            zoom={15}
            onClick={handleMapClick}
          >
            <Marker position={formData.location} />
          </GoogleMap>
        </LoadScript>

        {/* Bank Details Section */}
        <h2>Bank Details</h2>
        <div className="form-grid">
          <InputField label="Account Holder Name" type="text" name="accHolderName" value={formData.accHolderName} onChange={handleChange} />
          <InputField label="Account No" type="text" name="accNo" value={formData.accNo} onChange={handleChange} />
        </div>
        <div className="form-grid">
          <InputField label="IFSC Code" type="text" name="ifscCode" value={formData.ifscCode} onBlur={fetchBankDetails} onChange={handleChange} />
          <InputField label="Bank Name" type="text" name="bankName" value={formData.bankName} readOnly />
          <InputField label="Branch" type="text" name="branch" value={formData.branch} readOnly />
        </div>

        {/* Section Details */}
        <h2>Section</h2>
        <div className="form-grid">
          <InputField label="Section" type="text" name="section" value={formData.section} onChange={handleChange} />
          <InputField label="Min Order Qty" type="text" name="minOrderQty" value={formData.minOrderQty} onChange={handleChange} />
          <InputField label="Transportation" type="text" name="transportation" value={formData.transportation} onChange={handleChange} />
        </div>

        {/* Form Actions */}
        <div className="form-actions">
          <button className="btn btn-outline-success">Success</button>
          <button className="btn btn-outline-warning">Warning</button>
        </div>
      </div>
    </div>
  );
};

export default SupplierPortal;