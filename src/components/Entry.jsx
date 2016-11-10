import React from 'react';

const entryStyle = {
  paddingBottom: '1em',
  display: 'flex',
  justifyContent: 'space-between',
};

const spanStyle = {
  padding: ' 0 0 2em 2em',
  color: 'LightGray',
  cursor: 'pointer',
};

const Entry = ({ title, href, description, deleteEntry, idx, weekKey }) => (
  <div style={entryStyle}>
    <div>
      <dt> <a href={href}>{title}</a> </dt>
      <dd>{description}</dd>
    </div>
    <div>
      <span style={spanStyle} onClick={() => deleteEntry(idx, weekKey)}>x</span>
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
};
