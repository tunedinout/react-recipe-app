import React from 'react';
import './shopping.css';

function Shopping() {
  return (
    <div className="shop-container">
      <div className="form-name-container">
        <div className="form-name">
          <span>Name</span>
        </div>
        <div className="form-name-input">
          <input type="text" />
        </div>
      </div>

      <div className="form-amnt-container">
        <div className="form-amnt">
          <span>Amount</span>
        </div>
        <div className="form-amnt-input">
          <input type="number" />
        </div>
      </div>

      <div className="form-btn-container">
        <button type="button" className="form-btn-add">
          Add
        </button>
        <button type="button" className="form-btn-delete">
          Delete
        </button>
        <button type="button" className="form-btn-clear">
          Clear
        </button>
      </div>

      <div className="list-container">
        <div className="list-item">
          <span>Apple</span>
        </div>
        <div className="list-item list-item-last">
          <span>Guava</span>
        </div>
      </div>
    </div>
  );
}

export default Shopping;
