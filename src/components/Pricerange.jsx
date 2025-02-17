import React, { useState } from "react";
import "../App.css";

const Pricerange = () => {
  const [showForm, setShowForm] = useState(false);
  const [price, setPrice] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [priceRanges, setPriceRanges] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);

  const handleAddPriceRange = () => {
    if (priceFrom.trim() !== "" && priceTo.trim() !== "") {
      const newRange = { priceFrom, priceTo };
      setPriceRanges([...priceRanges, newRange]);
      setPriceFrom("");
      setPriceTo("");
    }
  };

  const handleSubmit = () => {
    if (price.trim() !== "" && priceRanges.length > 0) {
      const newData = {
        price,
        priceRanges: [...priceRanges],
      };
      setSubmittedData([...submittedData, newData]);
      setPrice("");
      setPriceRanges([]);
      setShowForm(false);
      alert("Price details submitted successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setPrice("");
    setPriceFrom("");
    setPriceTo("");
    setPriceRanges([]);
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
              <li><a className="dropdown-item" href="#">Name</a></li>
              <li><a className="dropdown-item" href="#">Created From</a></li>
              <li><a className="dropdown-item" href="#">Created To</a></li>
              <li><a className="dropdown-item" href="#">Active</a></li>
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

      {showForm && (
        <div>
          <div className="row">
            <div className="card-column">
              <h6>Price</h6>
              <div className="form-group">
                <label>Price:</label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter price"
                />
              </div>
            </div>

            <div className="card-column">
              <h6>Price Range</h6>
              <div className="form-group">
                <label>Price From:</label>
                <input
                  type="text"
                  value={priceFrom}
                  onChange={(e) => setPriceFrom(e.target.value)}
                  placeholder="From"
                />
              </div>

              <div className="form-group">
                <label>Price To:</label>
                <input
                  type="text"
                  value={priceTo}
                  onChange={(e) => setPriceTo(e.target.value)}
                  placeholder="To"
                />
              </div>

              <button className="btn btn-success" onClick={handleAddPriceRange}>
                Add Range
              </button>
            </div>

            {/* Column 3: Added Ranges Table */}
            <div className="card-column">
              <h6>Added Ranges</h6>
              <table className="added-ranges-table">
                <thead>
                  <tr>
                    <th>Price From</th>
                    <th>Price To</th>
                  </tr>
                </thead>
                <tbody>
                  {priceRanges.map((range, index) => (
                    <tr key={index}>
                      <td>{range.priceFrom}</td>
                      <td>{range.priceTo}</td>
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

        
        </div>
      )}
      {submittedData.length > 0 && (
        <div className="submitted-data">
          <h6>Submitted Data</h6>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Price</th>
                <th>Price Range From</th>
                <th>Price Range To</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <React.Fragment key={index}>
                  {data.priceRanges.map((range, rangeIndex) => (
                    <tr key={`${index}-${rangeIndex}`}>
                      {rangeIndex === 0 && (
                        <>
                          <td rowSpan={data.priceRanges.length}>{index + 1}</td>
                          <td rowSpan={data.priceRanges.length}>{data.price}</td>
                        </>
                      )}
                      <td>{range.priceFrom}</td>
                      <td>{range.priceTo}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Pricerange;
