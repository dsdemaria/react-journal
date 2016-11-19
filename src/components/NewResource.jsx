import 'bootstrap/dist/css/bootstrap.css';

import React, { Component } from 'react';
import NewResourceInput from './NewResourceInput';
import NewResourceTextarea from './NewResourceTextarea';

class NewResource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: 'block',
      titleValue: '',
      linkValue: '',
      descriptionValue: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  clearState() {
    this.setState({
      titleValue: '',
      linkValue: '',
      descriptionValue: '',
    });
  }

  render() {
    const formStyle = {
      padding: 5,
      border: '1px solid #333',
      display: this.state.isVisible ? 'block' : 'none',
    };
    return (
      <form className={formStyle}>
        <div className="form-horizontal">
          <h4 style={{ textAlign: 'center' }}>Add Resource</h4>
          <NewResourceInput
            title={'Title'}
            name={'titleValue'}
            inputValue={this.state.titleValue}
            handleInputChange={this.handleInputChange}
          />
          <NewResourceInput
            title={'Link'}
            name={'linkValue'}
            inputValue={this.state.linkValue}
            handleInputChange={this.handleInputChange}
          />
          <NewResourceTextarea
            title={'Description'}
            name={'descriptionValue'}
            inputValue={this.state.descriptionValue}
            handleInputChange={this.handleInputChange}
          />
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={() => {
              this.props.onEntrySubmit(this.state.titleValue, this.state.linkValue, this.state.descriptionValue, this.props.theState, this.props.weeksIdx);
              this.clearState()
            }}
          >
            Add!
          </button>
        </div>
      </form>
    );
  }
}

export default NewResource;

NewResource.propTypes = {
  theState: React.PropTypes.arrayOf(React.PropTypes.object),
  weeksIdx: React.PropTypes.number,
  onEntrySubmit: React.PropTypes.func,
};
