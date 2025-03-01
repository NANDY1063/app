import React, { useState } from "react";
import "../App.css";

const Report = () => {
  const [salesReport, setSalesReport] = useState(null);
  const [stockReport, setStockReport] = useState(null);
  const salesData = [
    { sno: 1, parent: "Silks", section: "Eco Soft Silks", date: "01/01/2021", qty: 10, saleValue: "₹10,000", stockQty: 10, stockValue: "₹10,000" }
  ];
  const productData = [
    { sno: 1, parent: "Silks", section: "Eco Soft Silks", product: "CP Silk Mix - 6001", qty: 10, saleValue: "₹10,000", stockQty: 10, stockValue: "₹10,000" }
  ];
  const stockData = [
    { sno: 1, section: "Silks", mode: "M", stockQty: 10, stockValue: "₹10,000" }
  ];
  return (
    <>
    <nav>
      <h5>Section / Product Wise Sale</h5>
      <h5>Section Wise Stock</h5>
    </nav>
    <div className="report-section">
      <div className="report-box">
        <h6>Enter the criteria</h6>
        <ReportForm type="sales" setReport={setSalesReport} />
      </div>
      <div className="report-box">
        <h6>Enter the criteria</h6>
        <ReportForm type="stock" setReport={setStockReport} />
      </div>
    </div>

    <div>
      {salesReport === "sales" && (
        <ReportTable title="Sales Report" data={salesData} columns={["S.NO", "Parent Section", "Section", "Invoice Date", "Sale Quantity", "Sale Value", "Stock Quantity", "Stock Value"]} />
      )}
      {salesReport === "product" && (
        <ReportTable title="Product Report" data={productData} columns={["S.NO", "Parent Section", "Section", "Product Name", "Sale Quantity", "Sale Value", "Stock Quantity", "Stock Value"]} />
      )}
      {stockReport && (
        <ReportTable title="Stock Report" data={stockData} columns={["S.NO", "Section", "Mode", "Stock Quantity", "Stock Value"]} />
      )}
    </div>
    </>
  );
};
//FORM COMPONENT
const ReportForm = ({ type, setReport }) => {
  return (
  <div>
    <div className="report-form">
      <label>Branch:</label>
      <select>
        <option>Choose...</option>
        <option>Main Branch</option>
        <option>CBE</option>
        <option>HSR</option>
        <option>KGR</option>
      </select>
      <label>Section:</label>
      <select>
        <option>Choose...</option>
        <option>MENS</option>
        <option>WOMENS</option>
        <option>KIDS</option>
        <option>SILK</option>
        <option>HANDLOOM</option>
      </select>
      <label> From Date: </label>
      <input type="date" />
      <label>To Date:</label>
      <input type="date" />
    </div>

    <div>
      <div className="report-radio-group">
        <input type="radio" />
        <label>Group By Date</label>
        <input type="radio" />
        <label>Value in Lakhs</label>
      </div>
      <div className="checkbox-group">
        <input type="checkbox" />
        <label>With Quantity</label>
        <input type="checkbox" />
        <label>Section Wise</label>
        <input type="checkbox" />
        <label>Stock Quantity</label>
      </div>
      <div className="checkbox-group">
        <input type="checkbox" />
        <label>With Value</label>
        <input type="checkbox" />
        <label>Section Group Wise</label>
        <input type="checkbox" />
        <label>Stock Quantity Value</label>
      </div>
    </div>
    
    <div className="bu-group">
      {type === "sales" && (
      <>
        <button className=" btn btn-success" onClick={() => setReport("sales")}>Generate as Sales</button>
        <button className=" btn btn-success" onClick={() => setReport("product")}>Generate as Product</button>
      </>
      )}
      {type === "stock" && <button className="btn btn-success" onClick={() => setReport("stock")}>Generate Sale Stock</button>}
        <button className="btn btn-warning" onClick={() => setReport(null)}>Clear</button>
    </div>
  </div>
  );
};
// Table Component
const ReportTable = ({ title, data, columns }) => {
  return (
    <div className="table-wrapper">
      <h5 className="table-title">{title}</h5>
      <table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((val, colIndex) => (
                <td key={colIndex}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};
export default Report;