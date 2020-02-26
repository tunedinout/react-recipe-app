import * as React from 'react';
import './recipes.css';


interface State {
  newClick: boolean;
  imgURL: string;
}
class Recipes extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      newClick: false,
      imgURL: '',
    };
    this.renderRecipeForm = this.renderRecipeForm.bind(this);
  }

  onNewClick(): void {
    const { newClick } = this.state;
    this.setState({
      newClick: !newClick,
    });
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ imgURL: (event.target).value });
  }

  renderRecipeForm(): React.ReactFragment {
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
          <input type="text" onChange={(event: React.ChangeEvent<HTMLInputElement>): void => { this.handleInputChange(event); }} value={imgURL} />
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

  render(): React.ReactFragment {
    const { newClick } = this.state;
    return (
      <div className="recipe-container">
        <div className="btn-container">
          <button
            type="button"
            className="btn-new"
            onClick={(): void => { this.onNewClick(); }}
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
