import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import '../App.css';

const EANForm = () => {
  const [formData, setFormData] = useState({
    codeNo: '',
    ean: '',
    ian: '',
    division: '',
    product: '',
    grid: '',
    color: '',
    quantity: '',
    mrp: '',
    sellingPrice: ''
  });

  const [tableData, setTableData] = useState([]);
  const [showDiscountModal, setShowDiscountModal] = useState(false);
  const [discountData, setDiscountData] = useState({
    ean: '',
    discount: '',
    fromDate: '',
    toDate: '',
    approvedBy: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [showAlert, setShowAlert] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, { ...formData, sno: tableData.length + 1, status: 'ACTIVE' }]);
    setFormData({
      codeNo: '',
      ean: '',
      ian: '',
      division: '',
      product: '',
      grid: '',
      color: '',
      quantity: '',
      mrp: '',
      sellingPrice: ''
    });
    setShowForm(false);
    setShowAlert(true); 
    setTimeout(() => setShowAlert(false), 3000); 
  };

  const handleDiscountChange = (e) => {
    const { name, value } = e.target;
    setDiscountData({ ...discountData, [name]: value });
  };

  const handleDiscountSubmit = (e) => {
    e.preventDefault();
    setShowDiscountModal(false);
  };

  const openDiscountModal = () => {
    setDiscountData({ ...discountData, eanCode: tableData.map(row => row.ean || row.ian).join(', ') });
    setShowDiscountModal(true);
  };

  return (
    <div>
      <nav>
        <h5>EAN Code</h5>
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
              <li>
                <a className="dropdown-item" href="#">
                  Search by EAN
                </a>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => setShowForm(true)}
          >
            Add Code
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={openDiscountModal}
          >
            Apply Discount
          </button>
        </div>
      </nav>

      {/* Bootstrap Alert */}
      {showAlert && (
        <div className="alert alert-success" role="alert">
          EAN Code submitted successfully!
        </div>
      )}

      {showForm && (
        <div className="form-container-supplier">
          <form onSubmit={handleSubmit}>
            <div className="form-supplier">
              {/* Code No */}
              <div className="ean-form-group">
                <label>Code No</label>
                <input
                  type="text"
                  name="codeNo"
                  value={formData.codeNo}
                  onChange={handleChange}
                  placeholder="Code No"
                />
              </div>

              {/* EAN */}
              <div className="ean-form-group">
                <label>EAN</label>
                <input
                  type="text"
                  name="ean"
                  value={formData.ean}
                  onChange={handleChange}
                  placeholder="Enter EAN"
                />
              </div>

              {/* IAN */}
              <div className="ean-form-group">
                <label>IAN</label>
                <input
                  type="text"
                  name="ian"
                  value={formData.ian}
                  onChange={handleChange}
                  placeholder="Enter IAN"
                />
              </div>

              {/* Division */}
              <div className="ean-form-group">
                <label>Division</label>
                <input
                  type="text"
                  name="division"
                  value={formData.division}
                  onChange={handleChange}
                  placeholder="Enter Division"
                />
              </div>

              {/* Product */}
              <div className="ean-form-group">
                <label>Product</label>
                <input
                  type="text"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  placeholder="Enter Product"
                />
              </div>
            </div>

            <div className="form-supplier">
              {/* Grid */}
              <div className="ean-form-group">
                <label>Grid</label>
                <input
                  type="text"
                  name="grid"
                  value={formData.grid}
                  onChange={handleChange}
                  placeholder="Enter Grid"
                />
              </div>

              {/* Color */}
              <div className="ean-form-group">
                <label>Color</label>
                <input
                  type="text"
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  placeholder="Enter Color"
                />
              </div>

              {/* Quantity */}
              <div className="ean-form-group">
                <label>Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Enter Quantity"
                />
              </div>

              {/* MRP */}
              <div className="ean-form-group">
                <label>MRP</label>
                <input
                  type="text"
                  name="mrp"
                  value={formData.mrp}
                  onChange={handleChange}
                  placeholder="Enter MRP"
                />
              </div>

              {/* Selling Price */}
              <div className="ean-form-group">
                <label>Selling Price</label>
                <input
                  type="text"
                  name="sellingPrice"
                  value={formData.sellingPrice}
                  onChange={handleChange}
                  placeholder="Enter Selling Price"
                />
              </div>
            </div>

            <div className="bu-group">
              <button className="btn btn-success" type="submit">
                SUBMIT
              </button>
              <button
                className="btn btn-warning"
                type="button"
                onClick={() => setShowForm(false)}
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>CHECK BOX</th>
              <th>SNO</th>
              <th>EAN CODE</th>
              <th>DIVISION</th>
              <th>GRID</th>
              <th>QTY</th>
              <th>MRP</th>
              <th>SELLING PRICE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    onChange={(e) => handleRowSelection(e, row)}
                  />
                </td>
                <td>{row.sno}</td>
                <td>{row.ean || row.ian}</td>
                <td>{row.division}</td>
                <td>{row.grid}</td>
                <td>{row.quantity}</td>
                <td>{row.mrp}</td>
                <td>{row.mrp * 1.5}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {showDiscountModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Discount</h5>
              <button
                className="btn btn-close"
                onClick={() => setShowDiscountModal(false)}
              ></button>
            </div>
            <form onSubmit={handleDiscountSubmit}>
              <div className="form-supplier">
                <div className="ean-form-group">
                  <label>EAN Code</label>
                  <input
                    type="text"
                    name="eanCode"
                    value={discountData.eanCode}
                    onChange={handleDiscountChange}
                    readOnly
                  />
                </div>
                <div className="ean-form-group">
                  <label>Discount</label>
                  <input
                    type="text"
                    name="discount"
                    value={discountData.discount}
                    onChange={handleDiscountChange}
                  />
                </div>
              </div>
              <div className="form-supplier">
                <div className="ean-form-group">
                  <label>From Date</label>
                  <input
                    type="date"
                    name="fromDate"
                    value={discountData.fromDate}
                    onChange={handleDiscountChange}
                  />
                </div>
                <div className="ean-form-group">
                  <label>To Date</label>
                  <input
                    type="date"
                    name="toDate"
                    value={discountData.toDate}
                    onChange={handleDiscountChange}
                  />
                </div>
              </div>
              <div className="form-supplier">
                <div className="ean-form-group">
                  <label>Approved By</label>
                  <input
                    type="text"
                    name="approvedBy"
                    value={discountData.approvedBy}
                    onChange={handleDiscountChange}
                  />
                </div>
              </div>
              <button
                className="btn btn-success"
                type="submit"
                style={{ marginLeft: "110rem" }}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EANForm;