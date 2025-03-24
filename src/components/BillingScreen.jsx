import React, { useState } from 'react';
export default function App() {
  const [activeTab,setActiveTab] =useState('Billing');
  const handleTabChange = (tab) =>{
    setActiveTab(tab);
  }
  const [showCashDenominationModal, setShowCashDenominationModal] = useState(false);
  const toggleCashDenominationModal = () => {
    setShowCashDenominationModal(!showCashDenominationModal);
  };

return (
<>
  <div className="row bg-primary">
  <div className="col-md-12 py-2 d-flex justify-content-center align-item-center">
    <button className="btn btn-primary me-4"><i className="fas fa-home"></i></button>
    <button className="btn btn-primary me-4">Stk F1</button>
    <button className="btn btn-primary me-4">Last Bit F2</button>
    <button className="btn btn-primary me-4">Pend. Bill F3</button>
    <button className="btn btn-primary me-4">Gift Card F4</button>
    <button className="btn btn-primary me-4">Set Item F5</button>
    <button className="btn btn-primary me-4">Discount F6</button>
    <button className="btn btn-primary me-4">Set-Cash F7</button>
    <button className="btn btn-primary me-4">Group F8</button>
    <button className="btn btn-primary me-4">Emp Tar F9</button>
    <button className="btn btn-primary"><i className="fas fa-sign-out-alt"></i></button>
  </div>
  </div>
 
{/* Main Content */}
<div className="row">
  
  {/* Billing Section (55%) */}  
  <div className="col-md-7 bg-light p-3 h-100"  style={{border:'1px solid #ccc' }}>
    <h6 className='text-center '>Billing Screen</h6>
    <div className="col-md-12">
      <ul className="nav nav-tabs mb-3">
      <li className="nav-item"><button className={`nav-link ${activeTab === 'VIP' ? 'active' : ''}`} onClick={() => handleTabChange('VIP')}>VIP</button></li>
      <li className="nav-item"><button className={`nav-link ${activeTab === 'Gift' ? 'active' : ''}`} onClick={() => handleTabChange('Gift')}>Gift</button></li>          
      <li className="nav-item"><button className={`nav-link ${activeTab === 'Adv' ? 'active' : ''}`}onClick={() => handleTabChange('Adv')} >Adv </button></li>          
      <li className="nav-item"><button className={`nav-link ${activeTab === 'Name' ? 'active' : ''}`} onClick={() => handleTabChange('Name')}>Name</button></li>          
      <li className="nav-item"><button className={`nav-link ${activeTab === 'EC' ? 'active' : ''}`} onClick={() => handleTabChange('EC')}>Ecno</button></li>
      <li className="nav-item"><button className={`nav-link ${activeTab === 'Exchange' ? 'active' : ''}`}onClick={() => handleTabChange('Exchange')}>Exchange</button></li>
      </ul>
    </div>
  
    <div className="row mt-2 border-bottom " >
      {activeTab === 'VIP' && (
      <>
        <div className="col-md-2">
          <label className="form-label">Card Mode</label>
          <select className="form-select">
            <option>Select Card Mode</option>
            <option>VIP</option>
            <option>MD</option>
            <option>Staff</option>
          </select>
        </div>
        <div className="col-md-2 mb-3">
          <label className="form-label">Card Number</label>
          <input type="text" className="form-control" placeholder="Enter Card Number" />
        </div>
        <div className="col-md-2 mb-3">
          <label className="form-label">Purchase Value</label>
          <input type="text" className="form-control" value="0"   />
        </div>
        <div className="col-md-2 mb-3">
          <label className="form-label">Pending GV Value</label>
          <input type="text" className="form-control" value="0"   />
        </div>
        <div className="col-md-2 mb-3">
              <label className="form-label">No of Pac</label>
              <input type="text" className="form-control" value="0"   />
        </div>
      </>
      )}
      {activeTab === 'Gift' && (
      <div className="col-md-2 mb-3">
        <label className="form-label">Gift Voucher</label>
        <input type="text" className="form-control" placeholder="Enter Gift Voucher" />
      </div> 
      )}
      {activeTab === 'Adv' && (
      <>
        <div className="col-md-3 mb-3">
          <label className="form-label">Customer Number</label>
          <input type="text" className="form-control" placeholder="Enter Customer Number" />
        </div>
        <div className="col-md-3 mb-3">
          <label className="form-label">Advance Amount</label>
          <input type="number" className="form-control" placeholder="Enter Advance Amount" />
        </div>
      </>
      )}
      {activeTab === 'Name' && (
        <div className="col-md-3 mb-3">
          <label className="form-label">Customer Name</label>
          <input type="text" className="form-control" placeholder="Enter Customer Name" />
        </div>
      )}
      {activeTab === 'EC' && (
        <div className="col-md-3 mb-3">
          <label className="form-label">ECNO Number</label>
          <input type="text" className="form-control" placeholder="Enter ECNO Number" />
        </div>
      )}
      {activeTab === 'Exchange' && (
      <>
        <div className="col-md-3 mb-3">
          <label className="form-label">Exchange Bill</label>
          <input type="text" className="form-control" placeholder="Enter Exchange Bill" />
        </div>
        <div className="col-md-3 mb-3">
          <label className="form-label">Exchange Amount</label>
          <input type="number" className="form-control" placeholder="Enter Exchange Amount" />
        </div>
        <div className="col-md-3 mb-3">
          <label className="form-label">Deduct Amount</label>
          <input type="number" className="form-control" placeholder="Enter Deduct Amount" />
        </div>
        <div className="col-md-3 mb-3">
          <label className="form-label">Balance Amount</label>
          <input type="number" className="form-control" placeholder="Enter Balance Amount" />
        </div>
        </>
        )}
    </div>  

    {/* Product Details */}
    <div className="row mb-3 mt-3">
      <div className="col-md-2">
        <label className="form-label">Discount Mode</label>
        <select className="form-select" >
          <option>Cash</option>
          <option>Gift Vocher</option>
        </select>
      </div>
      <div className="col-md-2">
        <label className="form-label">Item Code</label>
        <input type="text" className="form-control" placeholder="Enter Item Code"  />
      </div>
      <div className="col-md-2">
        <label className="form-label">Product Name</label>
        <input type="text" className="form-control" placeholder="Enter Product Name"  />
      </div>
      <div className="col-md-2">
        <label className="form-label">E.C</label>
        <input type="text" className="form-control" placeholder="Enter Ecno"  />
      </div>
      <div className="col-md-2">
        <label className="form-label">M.Cm</label>
        <input type="text" className="form-control" placeholder="Enter M.Cm" />
      </div>
      <div className="col-md-2">
        <label className="form-label">Qty</label>
        <input type="number" className="form-control" placeholder="Enter Qty"  />
      </div>
      <div className="col-md-2 mt-3">
        <label className="form-label">MRP Price</label>
        <input type="number" className="form-control" placeholder="Enter MRP"  />
      </div>
      <div className="col-md-2 mt-3">
        <label className="form-label">Dis %</label>
        <input type="number" className="form-control" placeholder="Enter Dis %"/>
      </div>
      <div className="col-md-2 mt-3">
        <label className="form-label">DisVal</label>
        <input type="number" className="form-control" placeholder="Enter DisVal" />
      </div>
      <div className="col-md-2 mt-3">
        <label className="form-label">Mt.Less</label>
        <input type="number" className="form-control" placeholder="Enter Mt.Less"/>
      </div>
      <div className="col-md-2 mt-3">
        <label className="form-label">Total Price</label>
        <input type="tel" className="form-control" placeholder="Total Price"  />
      </div>
      <div className="col-md-2 mt-3">
        <label className="form-label">No of Pack</label>
        <input type="number" className="form-control" placeholder="Enter No of Pack"  />
      </div>
    </div>
          
    {/* Item Details Table */}
    <h6 className='mt-5'>Product Details</h6>
    <table className="table table-bordered">
      <thead><tr>
        <th class="fw-normal">Item Code</th>
        <th class="fw-normal">Product Name</th>
        <th class="fw-normal">E.C</th>
        <th class="fw-normal">M.Cm</th>
        <th class="fw-normal">Qty</th>
        <th class="fw-normal">MRP</th>
        <th class="fw-normal">Dis %</th>
        <th class="fw-normal">DisVal</th>
        <th class="fw-normal">Mt.Less</th>
        <th class="fw-normal">Total</th>
      </tr></thead>
      <tbody><tr>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr></tbody>
    </table>
          
    {/* Total Summary */}
    <div className="row mt-5">
      <div className="col-md-6 text-start">
        <span>Total Qty : 0</span>
        <span className="ms-3">Total Value : ₹ 0</span>
        <span className='ms-3'>Total Net Amount : ₹ 0</span>
      </div>
      <div className="col-md-6 text-end">
        <button className="btn btn-success me-5">Submit</button>
        <button className="btn btn-danger me-5">Cancel</button>
      </div>
    </div>

    <div className="row mt-5 ">
      <div className="col-md-3 mt-5">
      <h6> Previous Bill</h6>
        <label className="form-label">Bill Number</label>
        <input type="text" className="form-control" value=" "   />
      </div>
      <div className="col-md-3 mt-4">
        <label className="form-label mt-5">Bill Date</label>
        <input type="text" className="form-control" value="  "   />
      </div>
     
    </div>
  </div>
               
  {/* Payment Section (35%) */}
  <div className="col-md-5 bg-light p-3" style={{border:'1px solid #ccc' }}>
  
    {/* Input Fields */}
    <div className="row mb-3">
      <h6 className='text-center'>Payment</h6>
      <div className="col-md-6">
        <label className="form-label">Scan Bill</label>
        <input type="text" className="form-control" placeholder="Scan Bill"   />
      </div>
    </div>
          
    {/* Details Table */}
    <h6>Details</h6>
    <table className="table table-bordered">
      <thead><tr>
        <th class="fw-normal">Bill Number</th>
        <th class="fw-normal" >Total</th>
        <th class="fw-normal">Billed Date</th>
        <th class="fw-normal">Cashier Name</th>
        <th class="fw-normal">Club Card</th>
        <th class="fw-normal" >Discount</th>
      </tr></thead>
      <tbody><tr>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr></tbody>
    </table>
          
    {/* Cash Denomination Button*/}
    {showCashDenominationModal && (
    <div className="modal fade show" style={{ display: 'block', position: 'fixed' }}>
      <div className="modal-dialog modal-lg">
      <div className="modal-content">
      <div className="modal-header">
        <h6 className="modal-title">Cash Denomination</h6>
        <h6 className="modal-title ms-auto">Other Payment Methods</h6>
        <button type="button"  className="btn-close" aria-label="Close" onClick={toggleCashDenominationModal}></button>
      </div>                
      <div className="modal-body">
      <div className="row">
        {/* Cash Denomination */}
        <div className="col-md-6">
        <table className="table table-bordered"><tbody>
          <tr>
            <td>₹500</td>
            <td>x</td>
            <td><input type="number" className="form-control" /></td>
            <td>₹0</td>
          </tr>
          <tr>
            <td>₹200</td>
            <td>x</td>
            <td><input type="number" className="form-control"   /></td>
            <td>₹0</td>
          </tr>
          <tr>
            <td>₹100</td>
            <td>x</td>
            <td><input type="number" className="form-control"   /></td>
            <td>₹0</td>
          </tr>
          <tr>
            <td>₹50</td>
            <td>x</td>
            <td><input type="number" className="form-control"   /></td>
            <td>₹0</td>
          </tr>
          <tr>
            <td>₹20</td>
            <td>x</td>
            <td><input type="number" className="form-control"   /></td>
            <td>₹0</td>
          </tr>
          <tr>
            <td>₹10</td>
            <td>x</td>
            <td><input type="number" className="form-control"   /></td>
            <td>₹0</td>
          </tr>
          <tr>
            <td>Coins</td>
            <td>x</td>
            <td><input type="number" className="form-control"   /></td>
            <td>₹0</td>
          </tr>
        </tbody></table>
        </div>

        {/* Other Payment Methods */}
        <div className="col-md-6">
        <table className="table table-bordered"><tbody>
          <tr>
            <td>Ad-Recd</td>
            <td><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Ad-Return</td>
            <td><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Gift Voucher</td>
            <td><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Card </td>
            <td><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Cheque/DD</td>
            <td><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Dly Incentive Issue</td>
            <td><input type="text" className="form-control" /></td>
          </tr>
          <tr>
            <td>Staff Purchase</td>
            <td><input type="text" className="form-control" /></td>
          </tr>                       
          <tr>
            <td>UPI Amount</td>
            <td><input type="text" className="form-control" /></td>
          </tr>               
        </tbody></table>
        </div>
      </div>
      <div className="text-center mt-3">
        <span>Total Amount: ₹0</span>
      </div>
      </div>
      <div className="modal-footer">
        <button className='btn btn-success'> Save</button>
        <button type="button" className="btn btn-secondary" onClick={toggleCashDenominationModal}>Close</button>
      </div>
      </div>
      </div>
      </div>
    )}
  
    <div className="mt-4">
      <h6>Payment Summary</h6>
      <table className="table table-bordered">
      <thead><tr>
        <th>Cash</th>
        <th>Online</th>
      </tr></thead>
      <tbody>
      <tr>
        <td>Received Amount <input type="number" id="receivedAmount" className="form-control" placeholder="Enter Received Amount" /></td>
        <td>Payment Device
        </td>
      </tr>
      <tr>
        <td>Balance Amount <input type="number" id="receivedAmount" className="form-control" placeholder="Enter Received Amount" /></td>
        <td>To Pay Online <input type="number" id="receivedAmount" className="form-control" placeholder="Enter Received Amount" /> </td>
      </tr>
      <tr>
        <td className="text-center">Total Amount </td>
        <td><input type="number" id="receivedAmount" className="form-control" placeholder="Enter Total Amount" /></td>
      </tr>      
    </tbody></table>
    </div>

    {/* Buttons */}
    <div className="row mt-4">
      <div className=" d-flex justify-content-end gap-2">
        <button className="btn btn-warning " onClick={toggleCashDenominationModal}> Cash Denomination</button>
        <button className="btn btn-warning ">Advance</button>
        <button className='btn btn-success' > Paid</button>
        <button className='btn btn-danger '> Cancel</button>
      </div>
    </div>
  </div>
</div>
<footer className="footer bg-primary text-white text-center py-1 fixed-bottom shadow-lg" style={{ zIndex: 1000 }}>
  <p className="mb-0">Copyright © Space Textiles [P] Ltd</p>
</footer>
</>
);
}