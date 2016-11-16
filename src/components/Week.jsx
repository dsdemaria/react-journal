import React from 'react';
import Entry from './Entry';
import './week.css';

const Week = ({ entries, title, sortAlphabetically, deleteEntry, editEntry }) => {
  const weekKey = title.replace(/\s+/g, '').toLowerCase();
  const weekEntries = entries.map((entry, idx) => {
    return (
      <div key={entry.title + idx}>
        <Entry title={entry.title} href={entry.link} description={entry.description} deleteEntry={deleteEntry} editEntry={editEntry} idx={idx} weekKey={weekKey} />
      </div>
    );
  });
  return (
    <div>
      <h2>{title}</h2>
      <dl>
        {weekEntries}
      </dl>
      <button className="btn btn-default" onClick={() => sortAlphabetically(entries, title)}>
        Sort Alphabetically
      </button>
      <hr />
    </div>
  );
};

export default Week;

Week.propTypes = {
  entries: React.PropTypes.arrayOf(React.PropTypes.object),
  title: React.PropTypes.string,
  sortAlphabetically: React.PropTypes.func,
  deleteEntry: React.PropTypes.func,
  editEntry: React.PropTypes.func,
};
