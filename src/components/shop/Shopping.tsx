import * as React from 'react';
import './shopping.css';

interface ShopState {
  itemName: string;
  itemAmount: number;
}
class Shopping extends React.Component<{}, ShopState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      itemName: '',
      itemAmount: 0,
    };
  }

  render(): React.ReactFragment {
    const { itemName, itemAmount } = this.state;
    return (
      <>
      <div className="shop-container">
        <div className="form-name-container">
          <div className="form-name">
            <span>Name</span>
          </div>
          <div className="form-name-input">
            <input type="text" value={itemName} />
          </div>
        </div>

        <div className="form-amnt-container">
          <div className="form-amnt">
            <span>Amount</span>
          </div>
          <div className="form-amnt-input">
            <input type="number" value={itemAmount} />
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
      </>
    );
  }
}

export default Shopping;
