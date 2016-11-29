import React, { Component } from 'react';
import EditEntry from './EditEntry';

const entryStyle = {
  paddingBottom: '1em',
  display: 'flex',
  justifyContent: 'space-between',
};
const left = {
  width: '75%',
  borderLeft: '2px solid #23527c',
  paddingLeft: '1em',
};

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
    this.toggleEditState = this.toggleEditState.bind(this);
  }
  toggleEditState() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }
  render() {
    if (this.state.isEditing) {
      return (
        <div>
          <EditEntry
            toggleEditState={this.toggleEditState}
            editEntry={this.props.editEntry}
            weeksIdx={this.props.weeksIdx}
            weekIdx={this.props.weekIdx}
            theState={this.props.theState}
          />
          <hr />
        </div>
      );
    }
    return (
      <div style={entryStyle}>
        <div style={left}>
          <dt> <a href={this.props.href}>{this.props.title}</a> </dt>
          <dd>{this.props.description}</dd>
        </div>
        <div className="btn-group" role="group">
          <button
            type="button"
            className="btn btn-default"
            onClick={() => this.props.deleteEntry(this.props.weeksIdx, this.props.weekIdx)}
          >
            <span className="glyphicon glyphicon-trash" />
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.toggleEditState}
          >
            <span className="glyphicon glyphicon-pencil" />
          </button>
        </div>
      </div>
    );
  }
}

Entry.propTypes = {
  title: React.PropTypes.string,
  href: React.PropTypes.string,
  description: React.PropTypes.string,
  weekIdx: React.PropTypes.number,
  weeksIdx: React.PropTypes.number,
  deleteEntry: React.PropTypes.func,
  editEntry: React.PropTypes.func,
  theState: React.PropTypes.arrayOf(React.PropTypes.object),
};
