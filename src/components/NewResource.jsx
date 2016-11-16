import 'bootstrap/dist/css/bootstrap.css';

import React, { Component } from 'react';
import NewResourceInput from './NewResourceInput';
import NewResourceTextarea from './NewResourceTextarea';
import NewResourceSelect from './NewResourceSelect';

class NewResource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: 'block',
    };
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
          <NewResourceInput
            title={'Title'}
            name={'titleValue'}
            value={this.props.titleValue}
            onChange={this.props.handleInputChange}
          />
          <NewResourceInput
            title={'Link'}
            name={'linkValue'}
            value={this.props.linkValue}
            onChange={this.props.handleInputChange}
          />
          <NewResourceTextarea
            title={'Description'}
            name={'descriptionValue'}
            value={this.props.descriptionValue}
            onChange={this.props.handleInputChange}
          />
          <NewResourceSelect
            title={'Select Week'}
            name={'optionValue'}
            value={this.props.optionValue}
            onChange={this.props.handleInputChange}
          />
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={this.props.addResource}
          >
            Add!
          </button>
          <hr />
        </div>
      </form>
    );
  }
}

export default NewResource;

NewResource.propTypes = {
  titleValue: React.PropTypes.string,
  linkValue: React.PropTypes.string,
  descriptionValue: React.PropTypes.string,
  optionValue: React.PropTypes.string,
  handleInputChange: React.PropTypes.func,
  addResource: React.PropTypes.func,
};
