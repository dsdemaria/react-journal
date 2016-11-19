import React, { Component } from 'react';
import Week from './Week';

export default class Weeks extends Component {
  render() {
    const weeksMap = this.props.weeks.map((entry, mapIdx) => {
      return (
        <div key={mapIdx}>
          <Week
            title={`Week ${mapIdx + 1}`}
            week={entry.week}
            sortAlphabetically={this.props.sortAlphabetically}
            deleteEntry={this.props.deleteEntry}
            editEntry={this.props.editEntry}
            weeksIdx={mapIdx}
            theState={this.props.weeks}

            onEntrySubmit={this.props.onEntrySubmit}
          />
          <hr />
        </div>
      );
    });
    return (
      <div>
        {weeksMap}
      </div>
    );
  }
}

Weeks.propTypes = {
  weeks: React.PropTypes.arrayOf(React.PropTypes.object),
  sortAlphabetically: React.PropTypes.func,
  deleteEntry: React.PropTypes.func,
  editEntry: React.PropTypes.func,
};
