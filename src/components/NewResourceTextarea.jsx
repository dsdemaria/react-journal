import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class NewResourceTextarea extends Component {
  render() {
    return (
      <div className="form-group">
        <label className="col-sm-2 control-label">{this.props.title}</label>
        <div className="col-sm-10">
          <textarea
            title={this.props.title}
            name={this.props.name}
            className="form-control"
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
            placeholder={`Add ${this.props.title}`}
          />
        </div>
      </div>
    );
  }
}

NewResourceTextarea.propTypes = {
  title: React.PropTypes.string,
  name: React.PropTypes.string,
  handleInputChange: React.PropTypes.func,
};
