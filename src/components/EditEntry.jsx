import React, { Component } from 'react';
import NewResourceInput from './NewResourceInput';
import NewResourceTextarea from './NewResourceTextarea';

export default class EditEntry extends Component {
  constructor() {
    super();
    this.state = {
      editTitle: '',
      editLink: '',
      editDescription: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="App">
        <button
          className="btn btn-default btn-block"
          onClick={this.props.toggleEditState}
        >
          Toggle Edit
        </button>
        <h3 style={{ textAlign: 'center' }}>Edit Entry</h3>
        <NewResourceInput
          title={'Title'}
          name={'editTitle'}
          inputValue={this.state.editTitle}
          handleInputChange={this.handleInputChange}
        />
        <NewResourceInput
          title={'Link'}
          name={'editLink'}
          inputValue={this.state.editLink}
          handleInputChange={this.handleInputChange}
        />
        <NewResourceTextarea
          title={'Description'}
          name={'editDescription'}
          inputValue={this.state.editDescription}
          handleInputChange={this.handleInputChange}
        />
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={() => {
            this.props.editEntry(this.props.weeksIdx, this.props.weekIdx, this.state.editTitle, this.state.editLink, this.state.editDescription);
            this.props.toggleEditState();
          }}
        >
          Edit Entry
        </button>
      </div>
    );
  }
}


EditEntry.propTypes = {
  toggleEditState: React.PropTypes.func,
  editEntry: React.PropTypes.func,
  weekIdx: React.PropTypes.number,
  weeksIdx: React.PropTypes.number,
};
