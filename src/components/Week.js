import React from 'react';
import Entry from './Entry.js';

const centerStyle = {
  margin: '0 auto'
}

const Week = ({ entries, title }) => {
  const weekEntries = entries.map(
    (entry, idx) => {
      return (
        <div key={entry.title + idx}>
          <Entry  title={entry.title} href={entry.title} description={entry.description}/>
        </div>
      )
    }
  );
  return (
    <div>
      <h2>{title}</h2>
      <dl style={centerStyle}>
        {weekEntries}
      </dl>
    </div>
  )
}

export default Week
