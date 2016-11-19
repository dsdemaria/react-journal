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
            weekIdx={mapIdx}
            weeksIdx={this.props.weeksIdx}
          />
        </div>
      );
    });
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>{this.props.title}</h2>
        <hr />
        <NewResource
          onEntrySubmit={this.props.onEntrySubmit}
          theState={this.props.theState}
          weeksIdx={this.props.weeksIdx}
        />
        <hr />
        <dl>
          {weekEntries}
        </dl>
        <button className="btn btn-default" onClick={() => this.props.sortAlphabetically(this.props.weeksIdx)}>
          Sort Alphabetically
        </button>
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
