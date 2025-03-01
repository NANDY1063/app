import React, { useState } from "react";
import "../App.css";

const Pricerange = () => {
  const [showForm, setShowForm] = useState(false);
  const [price, setPrice] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [addedPrices, setAddedPrices] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleAddPrice = () => {
    if (price.trim() !== "" && priceFrom.trim() !== "" && priceTo.trim() !== "") {
      const priceValue = parseFloat(price);
      const from = parseFloat(priceFrom);
      const to = parseFloat(priceTo);

      if (priceValue >= from && priceValue <= to) {
        setAddedPrices([...addedPrices, price]);
        setPrice("");
        setError("");
      } else {
        setError("Price must fall within the specified range.");
        setTimeout(() => setError(""), 3000); // Auto-hide error after 3 seconds
      }
    } else {
      setError("Please fill in all fields.");
      setTimeout(() => setError(""), 3000); // Auto-hide error after 3 seconds
    }
  };

  const handleSubmit = () => {
    if (addedPrices.length > 0 && priceFrom.trim() !== "" && priceTo.trim() !== "") {
      const newData = {
        priceRange: `${priceFrom} - ${priceTo}`,
        addedPrices: [...addedPrices],
      };
      setSubmittedData([...submittedData, newData]);
      setAddedPrices([]);
      setPriceFrom("");
      setPriceTo("");
      setShowForm(false);
      setError("");
      setShowAlert(true); // Show success alert
      setTimeout(() => setShowAlert(false), 3000); // Auto-hide success alert after 3 seconds
    } else {
      setError("Please add at least one price and specify a range.");
      setTimeout(() => setError(""), 3000); // Auto-hide error after 3 seconds
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setPrice("");
    setPriceFrom("");
    setPriceTo("");
    setAddedPrices([]);
    setError("");
  };

  return (
    <div>
      <nav>
        <h5>Price Range</h5>
        <div className="navleft">
          <div className="bu-group">
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
                  Created From
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
            onClick={() => setShowForm(true)}
          >
            Add Price
          </button>
        </div>
      </nav>

      {/* Success Alert */}
      {showAlert && (
        <div className="alert alert-success" role="alert">
          Price details submitted successfully!
        </div>
      )}

      {/* Error Alert */}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {showForm && (
        <div className="card-row">
          <div className="card-column">
            <h6>Price Range</h6>
            <div className="card-form-group">
              <label>Price From:</label>
              <input
                type="text"
                value={priceFrom}
                onChange={(e) => setPriceFrom(e.target.value)}
                placeholder="From"
              />
            </div>
            <div className="card-form-group">
              <label>Price To:</label>
              <input
                type="text"
                value={priceTo}
                onChange={(e) => setPriceTo(e.target.value)}
                placeholder="To"
              />
            </div>
          </div>

          <div className="card-column">
            <h6>Price</h6>
            <div className="card-form-group">
              <label>Price:</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price"
              />
            </div>
            <button className="btn btn-outline-success" onClick={handleAddPrice}>
              +
            </button>
          </div>

          <div className="card-column">
            <h6>Added Prices</h6>
            <table className="added-ranges-table">
              <thead>
                <tr>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {addedPrices.map((price, index) => (
                  <tr key={index}>
                    <td>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="bu-group">
              <button className="btn btn-success" onClick={handleSubmit}>
                Submit
              </button>
              <button className="btn btn-warning" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {submittedData.length > 0 && (
        <div className="submitted-data">
          <h6>Submitted Data</h6>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Price Range</th>
                <th>Added Prices</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.priceRange}</td>
                  <td>{data.addedPrices.join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Pricerange;