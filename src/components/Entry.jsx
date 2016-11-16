import React from 'react';

const entryStyle = {
  paddingBottom: '1em',
  display: 'flex',
  justifyContent: 'space-between',
};

const left = {
  width: '75%',
};

const Entry = ({ title, href, description, deleteEntry, editEntry, idx, weekKey }) => (
  <div style={entryStyle}>
    <div style={left}>
      <dt> <a href={href}>{title}</a> </dt>
      <dd>{description}</dd>
    </div>
    <div className="btn-group" role="group">
      <button
        type="button"
        className="btn btn-default"
        onClick={() => deleteEntry(idx, weekKey)}
      >
        <span className="glyphicon glyphicon-trash" />
      </button>
      <button
        type="button"
        className="btn btn-default"
        onClick={() => editEntry(idx, weekKey)}
      >
        <span className="glyphicon glyphicon-pencil" />
      </button>
    </div>
  </div>
);

export default Entry;

Entry.propTypes = {
  title: React.PropTypes.string,
  href: React.PropTypes.string,
  description: React.PropTypes.string,
  idx: React.PropTypes.number,
  weekKey: React.PropTypes.string,
  deleteEntry: React.PropTypes.func,
  editEntry: React.PropTypes.func,
};
