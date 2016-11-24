import React, { Component } from 'react';
import Week from './Week';

export default class Weeks extends Component {
  render() {
    const weeksMap = this.props.theState.map((entry, mapIdx) => {
      return (
        <div key={mapIdx} style={{ paddingBottom: '2em' }}>
          <Week
            title={`Week ${mapIdx + 1}`}
            week={entry.week}
            sortAlphabetically={this.props.sortAlphabetically}
            deleteEntry={this.props.deleteEntry}
            editEntry={this.props.editEntry}
            weeksIdx={mapIdx}
            theState={this.props.theState}

            onEntrySubmit={this.props.onEntrySubmit}
          />
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
  theState: React.PropTypes.arrayOf(React.PropTypes.object),
  sortAlphabetically: React.PropTypes.func,
  deleteEntry: React.PropTypes.func,
  editEntry: React.PropTypes.func,
  onEntrySubmit: React.PropTypes.func,
};
