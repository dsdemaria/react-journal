import React, { Component } from 'react';
import Entry from './Entry';
import NewResource from './NewResource';

const center = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingBottom: '2em',
};

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
      isVisible: !this.state.isVisible,
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
            weekIdx={mapIdx}
            weeksIdx={this.props.weeksIdx}
            theState={this.props.theState}
          />
        </div>
      );
    });

    if (this.state.isVisible) {
      return (
        <div>
          <div style={center}>
            <h2 style={{ textAlign: 'center' }}>{this.props.title}</h2>
            <a
              className="btn btn-link btn-xs"
              onClick={() => this.props.sortAlphabetically(this.props.weeksIdx)}
            >
              Sort Alphabetically
            </a>
          </div>
          <dl>
            {weekEntries}
          </dl>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <button
              type="button"
              className="btn btn-default"
              onClick={this.toggleEditState}
            >
              <div>Finished</div><span className="glyphicon glyphicon-menu-up" />
            </button>
          </div>
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
        <div style={center}>
          <h2 style={{ textAlign: 'center' }}>{this.props.title}</h2>
          <a
            className="btn btn-link btn-xs"
            onClick={() => this.props.sortAlphabetically(this.props.weeksIdx)}
          >
            Sort Alphabetically
          </a>
        </div>
        <dl>
          {weekEntries}
        </dl>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.toggleEditState}
          >
            <div>Add Entry</div><span className="glyphicon glyphicon-menu-down" />
          </button>
        </div>
        <hr />
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
