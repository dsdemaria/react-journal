import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class NewResourceInput extends Component {
  render() {
    return (
      <div className="form-group">
        <label className="col-sm-2 control-label">{this.props.title}</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            value={this.props.inputValue}
            name={this.props.name}
            onChange={this.props.handleInputChange}
            placeholder={`Add ${this.props.title}`}
          />
        </div>
      </div>
    );
  }
}

NewResourceInput.propTypes = {
  title: React.PropTypes.string,
  name: React.PropTypes.string,
  inputValue: React.PropTypes.string,
  handleInputChange: React.PropTypes.func,
};
