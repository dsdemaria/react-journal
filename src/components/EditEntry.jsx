import React, { Component } from 'react';

export default class EditEntry extends Component {
  constructor() {
    super();
    this.state = {
      editTitle: '',
      editLink: '',
      editDescription: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.changeEditEntry = this.changeEditEntry.bind(this);
  }
  componentDidMount() {
    console.log('EditEntry has mounted!');
    this.changeEditEntry(this.props.theState, this.props.weeksIdx, this.props.weekIdx);
  }
  changeEditEntry(theState, weeksIdx, weekIdx) {
    this.setState({
      editTitle: theState[weeksIdx].week[weekIdx].title,
      editLink: theState[weeksIdx].week[weekIdx].link,
      editDescription: theState[weeksIdx].week[weekIdx].description,
    });
  }
  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="panel panel-info">
        <div
          className="panel-heading"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h3 className="panel-title">Edit Entry</h3>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.toggleEditState}
          >
            <span className="glyphicon glyphicon-pencil" />&nbsp;Toggle Edit
          </button>
        </div>
        <div className="panel-body">
          <form
            className="form-horizontal"
            style={{ paddingBottom: '1em' }}
          >
            <div>
              <label className="control-label">Title</label>
              <input
                type="text"
                className="form-control"
                value={this.state.editTitle}
                name={'editTitle'}
                onChange={this.handleInputChange}
                placeholder={'Add Title'}
              />
              <label className="control-label">Link</label>
              <input
                type="text"
                className="form-control"
                value={this.state.editLink}
                name={'editLink'}
                onChange={this.handleInputChange}
                placeholder={'Add Link'}
              />
              <label className="control-label">Description</label>
              <textarea
                title={'Description'}
                name={'editDescription'}
                className="form-control"
                value={this.state.editDescription}
                onChange={this.handleInputChange}
                placeholder={'Add Description'}
              />
            </div>
          </form>
          <button
            type="button"
            className="btn btn-lg btn-primary btn-block"
            onClick={() => {
              this.props.editEntry(this.props.weeksIdx, this.props.weekIdx, this.state.editTitle, this.state.editLink, this.state.editDescription);
              this.props.toggleEditState();
            }}
          >
            Edit Entry
          </button>
        </div>
      </div>
    );
  }
}


EditEntry.propTypes = {
  toggleEditState: React.PropTypes.func,
  editEntry: React.PropTypes.func,
  theState: React.PropTypes.arrayOf(React.PropTypes.object),
  weekIdx: React.PropTypes.number,
  weeksIdx: React.PropTypes.number,
};
