import React, { Component } from 'react';
import Entry from './Entry';
import NewResource from './NewResource';
import './week.css';

export default class Week extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
    this.toggleEditState = this.toggleEditState.bind(this);
  }
  toggleEditState() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  render() {
    const weekEntries = this.props.week.map((entry, mapIdx) => {
      return (
        <div key={entry.title + mapIdx}>
          <Entry
            title={entry.title}
            href={entry.link}
            description={entry.description}
            deleteEntry={this.props.deleteEntry}
            editEntry={this.props.editEntry}
            sortAlphabetically={this.props.sortAlphabetically}
            weekIdx={mapIdx}
            weeksIdx={this.props.weeksIdx}
            theState={this.props.theState}
          />
        </div>
      );
    });
    if (this.state.isEditing) {
      return (
        <div>
          <NewResource
            onEntrySubmit={this.props.onEntrySubmit}
            theState={this.props.theState}
            weeksIdx={this.props.weeksIdx}
          />
          <hr />
        </div>
      );
    }
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>{this.props.title}</h2>
        <hr />
        <dl>
          {weekEntries}
        </dl>
        <button
          className="btn btn-default"
          onClick={() => this.props.sortAlphabetically(this.props.weeksIdx)}
        >
          Sort Alphabetically
        </button>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.toggleEditState}
          >
            <div>Add Entry</div><span className="glyphicon glyphicon-menu-down" />
          </button>
        </div>
      </div>
    );
  }
}

Week.propTypes = {
  week: React.PropTypes.arrayOf(React.PropTypes.object),
  theState: React.PropTypes.arrayOf(React.PropTypes.object),
  weeksIdx: React.PropTypes.number,
  title: React.PropTypes.string,
  sortAlphabetically: React.PropTypes.func,
  deleteEntry: React.PropTypes.func,
  editEntry: React.PropTypes.func,
  onEntrySubmit: React.PropTypes.func,
};
