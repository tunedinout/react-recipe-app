import React from 'react';
import './recipes.css';

class Recipes extends React.Component {
  constructor() {
    super();
    this.state = {
      newClick: false,
      imgURL: '',
    };
    this.renderRecipeForm = this.renderRecipeForm.bind(this);
  }

  onNewClick() {
    const { newClick } = this.state;
    this.setState({
      newClick: !newClick,
    });
  }

  handleInputChange(event) {
    this.setState({ imgURL: event.target.value });
  }

  renderRecipeForm() {
    const { imgURL } = this.state;
    return (
      <>
        <div className="button-panel">
          <button type="button" className="panel-btn-save">
            Save
          </button>
          <button type="button" className="panel-btn-delete">
            Delete
          </button>
        </div>

        <div className="input-container">
          <span>Name</span>
          <input type="text" />
        </div>

        <div className="input-container">
          <span>Image URL</span>
          <input type="text" onChange={(event) => { this.handleInputChange(event); }} value={imgURL} />
        </div>

        {imgURL ? (
          <div>
            <img alt="unable to load URL" src={imgURL} />
          </div>
        ) : (<br />)}

        <div className="desc-container">
          <span>Description</span>
          <input type="text" />
        </div>
      </>

    );
  }

  render() {
    const { newClick } = this.state;
    return (
      <div className="recipe-container">
        <div className="btn-container">
          <button
            type="button"
            className="btn-new"
            onClick={() => { this.onNewClick(); }}
          >
            New recipe
          </button>
        </div>
        <div className="recipe-create-view">
          {
            !newClick ? 'Please create a Recipe!!!' : this.renderRecipeForm()
          }
        </div>
      </div>
    );
  }
}

export default Recipes;
